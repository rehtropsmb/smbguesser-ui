import { Typography, Box, Button, Input, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import Results from "./Results";
import ImageDisplay from "./ImageDisplay";
import TimeRemaining from "./TimeRemaining";
import stages from "../data/stages";
import TopBar from "./TopBar";
import { fuzzy } from "fast-fuzzy";

function Game() {

    const [gameState, setGameState] = useState('PLAYING');

    const [guesses, setGuesses] = useState([]);

    const [gameHistory, setGameHistory] = useState(() => {
        const saved = localStorage.getItem("gameHistory");
        const parsed = JSON.parse(saved);
        return parsed ?? [];
    });
    useEffect(() => {

    }, [gameHistory]);

    // const [gameStats, setGameStats] = useState(() => {
    //     const saved = localStorage.getItem("gameStats");
    //     const parsed = JSON.parse(saved);
    //     return parsed ?? [];
    // });

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

    useEffect(() => {
        if (gameToday && puzzle === gameToday.puzzle) {
            setGuesses(gameToday.guesses);
            setGameState(gameToday.gameState);
        } else {
            setGameToday({
                puzzle: puzzle,
                guesses: [],
                gameState: 'PLAYING',
            });
        }
        // Only run once on initial mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPuzzleNumber = () => {
        const startDate = new Date('2024-09-20T00:00:00-04:00'); // Midnight ET on 9/21/2024
        const now = new Date();
        const currentDate = new Date(
          now.toLocaleString('en-US', { timeZone: 'America/New_York' })
        );
        const diff = currentDate - startDate;
        const day = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

        return day;
    };
    const [puzzle, setPuzzle] = useState(getPuzzleNumber());

    const stage = stages[getPuzzleNumber() - 1];    
    
    const getTimeUntilMidnight = () => {
        const now = new Date();
        const currentEasternTime = new Date(
          now.toLocaleString('en-US', { timeZone: 'America/New_York' })
        );
      
        const nextMidnight = new Date(currentEasternTime);
        nextMidnight.setHours(24, 0, 0, 0); // Set to midnight of the next day
      
        return nextMidnight - currentEasternTime; // Milliseconds until midnight
      };

    useEffect(() => {
        // start timer
        const timeUntilMidnight = getTimeUntilMidnight();
        const timer = setTimeout(() => {
            // reset game
            const num = getPuzzleNumber();
            setPuzzle(num);
            setGuesses([]);
            setGameState('PLAYING');
            const updated = {
                puzzle: num,
                guesses: [],
                gameState: 'PLAYING',
            };
            setGameToday(updated);
            localStorage.setItem("gameToday", JSON.stringify(updated));
        }, timeUntilMidnight);

        return () => clearTimeout(timer);
        // Only run when clock hits midnight
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [puzzle]);
    
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
            addGuess(inputText);
        }
    };

    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        if (event.target.value.length > 50) { return; }
        setInputText(event.target.value);
    };

    const guessDisplay = guesses.map(g => {
        return (
            <Paper elevation={4} key={g.num} sx={{ margin: '10px', padding: '5px', width: '490px' }}>
                <Typography variant="h6">{ g.value }</Typography>
            </Paper>
        );
    });

    const addGuess = (guess = '') => {
        const value = guess ? guess : 'Skipped!';
        setGuesses(prev => {
            const currGuesses = [...prev, { num: prev.length + 1, value }];
            // did player win the game?
            const similarity = fuzzy(stage.name.toLowerCase(), guess.toLowerCase());
            console.log('similarity', similarity);
            if (similarity > 0.85) {
                setGameState('WON');
                const result = {
                    puzzle: puzzle,
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
                    puzzle: puzzle,
                    score: guesses.length,
                    state: 'L',
                };
                const history = [...gameHistory, result];
                localStorage.setItem("gameHistory", JSON.stringify(history));
                setGameHistory(history);
            }
            setInputText('');
            return currGuesses;
        });
    };

    const getInput = () => {
        return  (
            <>
                <Input placeholder="Enter Stage Name..." value={inputText} onChange={handleInputChange} onKeyDown={handleEnterKey} sx={{ width: '500px', margin: '15px' }}/>
                <Button key="submit" variant="contained" onClick={() => addGuess(inputText)} sx={{ backgroundColor: '#468966', width: '500px' }}>
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>Submit</Typography>
                </Button>
            </>
        );
    }

    const input = getInput();

    const handleCopyClick = () => {
        const emoji = guesses.map(g => (g.value.toLowerCase() !== stage.name.toLowerCase() ? `🟥` : `🟩`)).join(' ');
        let score = '';
        if (gameState === 'WON') {
            score = `(${guesses.length}/5)`;
        } else if (gameState === 'LOST') {
            score = `(X/5)`;
        }
        const text = `SMB Guesser #${puzzle}\n${emoji} ${score}\nhttps://smbguesser.com`;
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied!");
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
        });
    }

    return (
        <>
            <TopBar gameHistory={gameHistory}/>
            <Typography>Stage #{puzzle}</Typography>
            <ImageDisplay currentGuess={guesses.length + 1} gameState={gameState} handleSkip={() => addGuess()} puzzle={puzzle}/>
            { gameState === "PLAYING" && input }
            <Results gameState={gameState} onCopyClick={handleCopyClick} stage={stage}/>
            <Box>
                { guessDisplay }
            </Box>
            <TimeRemaining/>
        </>
    );
}

export default Game;