import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function ImageDisplay({ currentGuess, gameState, handleSkip, puzzle }) {

    const [selectedImage, setSelectedImage] = useState(currentGuess);

    const imageUrls = [
        `/images/st${puzzle}/1.webp`,
        `/images/st${puzzle}/2.webp`,
        `/images/st${puzzle}/3.webp`,
        `/images/st${puzzle}/4.webp`,
        `/images/st${puzzle}/5.webp`,
    ];

    const isNotLoading = gameState !== 'LOADING';

    const numberedButtons = [1, 2, 3, 4, 5].map(n => {
        const color = gameState === 'WON' ? '#468966' : '#803D3B';
        if ((n > currentGuess && gameState === 'PLAYING') || gameState === 'LOADING') {
            return (
                <Button key={n} variant="contained" disabled sx={{ margin: '5px', minWidth: '42px', backgroundColor: color, color: 'white' }}>
                    {n}
                </Button>
            );
        } else {
            return (
                <Button key={n} variant="contained" onClick={() => setSelectedImage(n)} sx={{ display: 'inline', margin: '5px', minWidth: '42px', backgroundColor: color }}>
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
            { selectedImage === 1 && (
                <Box 
                    component="img"
                    src={isNotLoading ? imageUrls[0] : ''}
                    alt="Loading..."
                    sx={{ width: { xs: 340, sm: 400, md: 500 }, height: { xs: 255, sm: 300, md: 375 }, borderRadius: '8px', border: '2px solid #322C2B' }}
                />
            )}
            { selectedImage === 2 && (
                <Box 
                    component="img"
                    src={isNotLoading ? imageUrls[1] : ''}
                    alt="Loading..."
                    sx={{ width: { xs: 340, sm: 400, md: 500 }, height: { xs: 255, sm: 300, md: 375 }, borderRadius: '8px', border: '2px solid #322C2B' }}
                />
            )}
            { selectedImage === 3 && (
                <Box 
                    component="img"
                    src={isNotLoading ? imageUrls[2] : ''}
                    alt="Loading..."
                    sx={{ width: { xs: 340, sm: 400, md: 500 }, height: { xs: 255, sm: 300, md: 375 }, borderRadius: '8px', border: '2px solid #322C2B' }}
                />
            )}
            { selectedImage === 4 && (
                <Box 
                    component="img"
                    src={isNotLoading ? imageUrls[3] : ''}
                    alt="Loading..."
                    sx={{ width: { xs: 340, sm: 400, md: 500 }, height: { xs: 255, sm: 300, md: 375 }, borderRadius: '8px', border: '2px solid #322C2B' }}
                />
            )}
            { selectedImage === 5 && (
                <Box 
                    component="img"
                    src={isNotLoading ? imageUrls[4] : ''}
                    alt="Loading..."
                    sx={{ width: { xs: 340, sm: 400, md: 500 }, height: { xs: 255, sm: 300, md: 375 }, borderRadius: '8px', border: '2px solid #322C2B' }}
                />
            )}
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
