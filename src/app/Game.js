import { Typography, Box, Button, Input, Paper } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState, useEffect, useCallback } from "react";
import Results from "./Results";
import ImageDisplay from "./ImageDisplay";
import TimeRemaining from "./TimeRemaining";

function Game({ number }) {

    const stagename = 'Tick-Flip';

    // const localResults = localStorage.getItem('guesserResults');
    // const parsedResults = localResults ? JSON.parse(localResults) : [];
    // const [result, setResult] = useState(parsedResults);

    const [gameState, setGameState] = useState('PLAYING');

    const handleSkip = () => {
        // result.push({ score: 4 });
        // setResult(result);
        // localStorage.setItem('guesserResults', JSON.stringify([]));
    };

    const handleSubmit = () => {
        // console.log(localStorage.getItem('guesserResults'));
    }
    
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
            addGuess(inputText);
        }
    };

    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(1);

    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const guessDisplay = guesses.map(g => (
        <Paper key={g.num}>
            { g.value }
        </Paper>
    ));

    const addGuess = (guess = '') => {
        if (guess.toLowerCase() === stagename.toLowerCase()) {
            setGameState('WON');
            return;
        }
        const value = guess ? guess : 'Skipped!';
        setGuesses(prev => {
            const curr = [...prev, { num: currentGuess, value }];
            return curr;
        });
        setInputText('');

        if (currentGuess < 5) {
            setCurrentGuess(prev => {
                return prev + 1;
            });
        } else {
            // finish game
            setGameState('LOST');
        }
    };

    const getInput = () => {
        return  (
            <>
                <Input placeholder="Enter Stage Name..." value={inputText} onChange={handleInputChange} onKeyDown={handleEnterKey} sx={{ width: '350px', margin: '15px' }}/>
                <Button key="submit" variant="contained" onClick={() => addGuess(inputText)} sx={{ backgroundColor: '#468966', width: '350px' }}>
                    Submit
                </Button>
            </>
        );
    }

    const input = getInput();

    const handleCopyClick = () => {
        navigator.clipboard.writeText(`SMB Guesser #1\n🟥🟥🟥🟩\nhttps://smbguesser.com`).then(() => {
            alert("Text copied!");
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
        });
    }

    return (
        <>
            <Typography>Stage #{number}</Typography>
            <ImageDisplay currentGuess={currentGuess} gameState={gameState} handleSkip={() => addGuess()}/>
            { gameState === "PLAYING" && input }
            <Results gameState={gameState} onCopyClick={handleCopyClick}/>
            <Box>
                { guessDisplay }
            </Box>
            <TimeRemaining/>
        </>
    );
}

export default Game;