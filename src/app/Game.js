import { Typography, Box, Button, Paper, Autocomplete, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Results from "./Results";
import ImageDisplay from "./ImageDisplay";
import TimeRemaining from "./TimeRemaining";
import TopBar from "./TopBar";
import didYouMean, { ReturnTypeEnums } from "didyoumean2";
import stagenames from "../data/stagenames";

function Game({ puzzleNumber, stage }) {

    const [gameState, setGameState] = useState('LOADING');

    const [guesses, setGuesses] = useState([]);

    const [gameHistory, setGameHistory] = useState(() => {
        const saved = localStorage.getItem("gameHistory");
        const parsed = JSON.parse(saved);
        return parsed ?? [];
    });

    const [gameToday, setGameToday] = useState(() => {
        const saved = localStorage.getItem("gameToday");
        const parsed = JSON.parse(saved);
        return parsed ?? null;
    });
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
        if (gameToday && puzzleNumber === gameToday.puzzle) {
            setGuesses(gameToday.guesses);
            setGameState(gameToday.gameState);
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

    useEffect(() => {

    }, )
    
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
                const result = {
                    puzzle: puzzleNumber,
                    score: currGuesses.length,
                    state: 'W',
                };
                const history = [...gameHistory, result];
                localStorage.setItem("gameHistory", JSON.stringify(history));
                setGameHistory(history);
            } else if (currGuesses.length >= 5) {
                // finish game
                setGameState('LOST');
                const result = {
                    puzzle: puzzleNumber,
                    score: guesses.length,
                    state: 'L',
                };
                const history = [...gameHistory, result];
                localStorage.setItem("gameHistory", JSON.stringify(history));
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
        const emoji = guesses.map(g => (g.value.toLowerCase() !== stage.name.toLowerCase() ? `🟥` : `🟩`)).join(' ');
        let score = '';
        if (gameState === 'WON') {
            score = `(${guesses.length}/5)`;
        } else if (gameState === 'LOST') {
            score = `(X/5)`;
        }
        return `SMB Guesser #${puzzleNumber}\n${emoji} ${score}\nhttps://smbguesser.com`;
    }

    return (
        <>
            <TopBar gameHistory={gameHistory}/>
            <Typography>Stage #{puzzleNumber}</Typography>
            <ImageDisplay currentGuess={guesses.length + 1} gameState={gameState} handleSkip={() => addGuess()} puzzle={puzzleNumber}/>
            { gameState === "PLAYING" && input }
            <Results gameState={gameState} getCopyText={getCopyText} stage={stage}/>
            <Box>
                { guessDisplay }
            </Box>
            <TimeRemaining/>
        </>
    );
}

export default Game;