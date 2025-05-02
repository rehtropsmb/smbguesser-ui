import { Typography, Box, Button, Paper, Autocomplete, TextField } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import Results from "./Results";
import ImageDisplay from "./ImageDisplay";
import TimeRemaining from "./TimeRemaining";
import TopBar from "./TopBar";
import didYouMean, { ReturnTypeEnums } from "didyoumean2";
import stagenames from "../data/stagenames";
import ConfettiExplosion from "react-confetti-explosion";
import UpdateDialog from "./UpdateDialog";

function Game({ puzzleNumber, stage }) {

    const [gameState, setGameState] = useState('LOADING');

    const [guesses, setGuesses] = useState([]);

    const [gameHistory, setGameHistory] = useState(() => {
        let saved;
        if (puzzleNumber < 162) {
            saved = localStorage.getItem("gameHistory_3");
        } else {
            saved = localStorage.getItem("gameHistory_4");
        }
        const parsed = JSON.parse(saved);
        return parsed ?? {};
    });

    const [gameToday, setGameToday] = useState(() => {
        const saved = localStorage.getItem("gameToday");
        const parsed = JSON.parse(saved);
        return parsed ?? null;
    });

    const CURRENT_UPDATE = 4;
    const [lastUpdate, setLastUpdate] = useState(() => {
        const saved = localStorage.getItem("lastUpdate");
        const parsed = JSON.parse(saved);
        return parsed ?? 0;
    });
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
    const setUpdateDialogViewed = () => {
        setLastUpdate(CURRENT_UPDATE);

        localStorage.setItem("lastUpdate", JSON.stringify(CURRENT_UPDATE));
    };

    const [confetti, setConfetti] = useState(false);

    useEffect(() => {
        setGameToday(prev => {
            const updated = {
                ...prev,
                guesses: guesses,
                gameState: gameState,
            };
            localStorage.setItem("gameToday", JSON.stringify(updated));

            return updated;
        });
    }, [guesses, gameState]);
    

    // initial load of gameToday
    useEffect(() => {
        // localStorage.setItem("lastUpdate", JSON.stringify(CURRENT_UPDATE));
        if (lastUpdate < CURRENT_UPDATE) {
            setUpdateDialogOpen(true);
        }

        if (gameToday && puzzleNumber === gameToday.puzzle) {
            setGuesses(gameToday.guesses);
            setGameState(gameToday.gameState);
            if (gameToday.gameState === "WON") {
                setConfetti(true);
                setTimeout(() => {
                    setConfetti(false)
                }, 3_500);
            }
        } else {
            setGameToday({
                puzzle: puzzleNumber,
                guesses: [],
                gameState: 'PLAYING',
            });
            setGameState('PLAYING')
        }
        // Only run once on initial mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
            if (!autocompleteOpen) {
                addGuess(inputText);
            }
        } else if (event.key === 'Tab') {
            event.preventDefault();
            const filtered = didYouMean(inputText, stagenames, { returnType: ReturnTypeEnums.ALL_SORTED_MATCHES })[0];
            if (filtered) { setInputText(filtered); }
            setAutoCompleteOpen(false);
        }
    };

    const [inputText, setInputText] = useState('');
    const handleInputChange = (event, update, reason) => {
        if (update.length > 50) { return; }
        setInputText(update);
    };

    const guessDisplay = guesses.map(g => {
        const backgroundColor = g.value.toLowerCase() === stage.name.toLowerCase() ? '#468966' :'#803D3B';
        return (
            <Paper elevation={4} key={g.num} sx={{ backgroundColor: backgroundColor, color: 'white', margin: '10px', padding: '5px', width: { xs: 340, sm: 390 }}}>
                <Typography variant="h6">{ g.value }</Typography>
            </Paper>
        );
    });

    const addGuess = (guess = '') => {
        if (gameState !== 'PLAYING') { return; }
        const value = guess ? guess : 'Skipped!';
        setInputText('');
        setGuesses(prev => {
            const currGuesses = [...prev, { num: prev.length + 1, value }];
            // did player win the game?
            if (stage.name.toLowerCase() === guess.toLowerCase()) {
                setGameState('WON');
                setConfetti(true);
                setTimeout(() => {
                    setConfetti(false)
                }, 3_500);
                const result = {
                    puzzle: puzzleNumber,
                    score: currGuesses.length,
                    state: 'W',
                };
                const history = {
                    ...gameHistory
                };
                history[puzzleNumber] = result;
                if (puzzleNumber < 162) {
                    localStorage.setItem("gameHistory_3", JSON.stringify(history));
                } else {
                    localStorage.setItem("gameHistory_4", JSON.stringify(history));
                }
                setGameHistory(history);
            } else if (currGuesses.length >= 5) {
                // finish game
                setGameState('LOST');
                const result = {
                    puzzle: puzzleNumber,
                    score: currGuesses.length,
                    state: 'L',
                };
                const history = {
                    ...gameHistory
                };
                history[puzzleNumber] = result;
                if (puzzleNumber < 162) {
                    localStorage.setItem("gameHistory_3", JSON.stringify(history));
                } else {
                    localStorage.setItem("gameHistory_4", JSON.stringify(history));
                }
                setGameHistory(history);
            }
            return currGuesses;
        });
    };
    const filterOptions = (options, { inputValue }) => {
        return didYouMean(inputValue, options, { returnType: ReturnTypeEnums.ALL_SORTED_MATCHES }).slice(0, 5);
    };

    const [autocompleteOpen, setAutoCompleteOpen] = useState(false);

    const getInput = () => {
        return  (
            <>
                <Autocomplete
                    freeSolo
                    options={stagenames}
                    filterOptions={filterOptions}
                    inputValue={inputText}
                    onInputChange={handleInputChange}
                    onKeyDown={handleEnterKey}
                    open={autocompleteOpen}
                    onOpen={() => setAutoCompleteOpen(true)}
                    onClose={() => setAutoCompleteOpen(false)}
                    renderInput={(params) => (
                        <TextField {...params} label="Enter Stage Name..." variant="outlined"/>
                    )}
                    sx={{ width: { xs: 350, sm: 400 }, margin: '15px' }}
                />
                <Button key="submit" variant="contained" onClick={() => addGuess(inputText)} sx={{ backgroundColor: '#468966', width: { xs: 350, sm: 400 } }}>
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>Submit</Typography>
                </Button>
            </>
        );
    }

    const input = getInput();

    const getCopyText = () => {
        let emoji = guesses.map(g => (g.value.toLowerCase() !== stage.name.toLowerCase() ? `🟥` : `🟩`)).join(' ');
        for (let i = 0; i < 5 - guesses.length; i++) {
            emoji += ` ⬛`;
        }
        let score = '';
        if (gameState === 'WON') {
            score = `(${guesses.length}/5)`;
        } else if (gameState === 'LOST') {
            score = `(X/5)`;
        }
        return `SMB Guesser #${puzzleNumber}\n${emoji} ${score}\nhttps://smbguesser.com`;
    }

    const gameHistoryArray = useMemo(() => {
        return Object.values(gameHistory).sort((a, b) => (a.puzzle - b.puzzle));
    }, [gameHistory]);

    return (
        <>
            {confetti && <ConfettiExplosion
                particleCount={200}
                duration={3000}
                width={1500}
            />}
            <TopBar gameHistory={gameHistoryArray}/>
            <Typography>Stage #{puzzleNumber - 100}</Typography>
            <ImageDisplay currentGuess={guesses.length + 1} gameState={gameState} handleSkip={() => addGuess()} puzzle={puzzleNumber}/>
            { gameState === "PLAYING" && input }
            <Results gameState={gameState} getCopyText={getCopyText} stage={stage} score={guesses.length}/>
            <Box>
                { guessDisplay }
            </Box>
            <TimeRemaining/>

            <UpdateDialog open={updateDialogOpen} setOpen={setUpdateDialogOpen} setUpdateDialogViewed={setUpdateDialogViewed}/>
            
            <Typography variant="body2" sx={{ maxWidth: '500px', fontWeight: 'bold' }}>
                May 1st, 2025
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '15px' }}>
                Season 4 has begun, thanks to TAR for preparing sets of images for 100 stages!
                I hope you enjoy more guessers for the whole summer!
                - rehtrop
            </Typography>
        </>
    );
}

export default Game;