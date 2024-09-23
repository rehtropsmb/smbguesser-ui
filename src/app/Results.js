import { Typography, Box, Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from "react";

function Results({ gameState, stage, getCopyText }) {

    const [copyText, setCopyText] = useState('Share Results');



    const getWon = () => {
        return (
            <Typography variant="h5">
                Congrats!
            </Typography>
        );
    }

    const getLost = () => {
        return (
            <Typography variant="h5">
                Better luck next time!
            </Typography>
        );
    }

    const won = getWon();
    const lost = getLost();

    const handleCopyClick = () => {
        const text = getCopyText();
        navigator.clipboard.writeText(text).then(() => {
            setCopyText('Copied!')
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
        });
    }

    if (gameState === "PLAYING") {
        return null;
    }
    
    return (
        <Box>
            { gameState === "WON" && won }
            { gameState === "LOST" && lost }
            <Typography variant="body1">
                The answer was: 
            </Typography>
            <Typography variant="h5">
            {stage.slot} {stage.name} from {stage.pack}
            </Typography>
            <Button variant="contained" onClick={handleCopyClick}>
                { copyText }
                <ContentCopyIcon sx={{ marginLeft: '5px'}}/>
            </Button>
        </Box>
    );
}

export default Results;
