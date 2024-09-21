import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function ImageDisplay({ currentGuess, gameState, handleSkip, puzzle }) {

    const [selectedImage, setSelectedImage] = useState(1);

    const imageUrl = `/images/st${puzzle}/${selectedImage}.webp`;

    const numberedButtons = [1, 2, 3, 4, 5].map(n => {
        if (n > currentGuess && gameState === 'PLAYING') {
            return (
                <Button key={n} variant="contained" disabled sx={{ margin: '5px', minWidth: '42px', backgroundColor: '#B64926', color: 'white' }}>
                    {n}
                </Button>
            );
        } else {
            return (
                <Button key={n} variant="contained" onClick={() => setSelectedImage(n)} sx={{ display: 'inline', margin: '5px', minWidth: '42px', backgroundColor: '#B64926' }}>
                    { selectedImage === n ? (<Typography variant="body1" sx={{ fontWeight: 'bold'}}>{n}</Typography>) : (<Typography variant="body">{n}</Typography>)}
                </Button>
            );
        }
    });

    useEffect(() => {
        setSelectedImage(Math.min(5, Math.max(1, currentGuess)));
    }, [currentGuess]);

    return (
        <>
            <Box 
                component="img"
                src={imageUrl}
                alt="Stage Image"
                sx={{ width: 400, height: 300, borderRadius: '8px' }}
            />
            <Box>
                { numberedButtons }
                <Button key="skip" variant="contained" disabled={gameState !== "PLAYING"} onClick={() => handleSkip()} sx={{ margin: '5px', backgroundColor: '#FFB03B', width: '105px' }}>
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>Skip</Typography>
                    <KeyboardDoubleArrowRightIcon/>
                </Button>
            </Box>
        </>
    );
}

export default ImageDisplay;
