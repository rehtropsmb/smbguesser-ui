import { Typography, Box, Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Results({ gameState, onCopyClick }) {

    if (gameState === "PLAYING") {
        return null;
    }

    const getWon = () => {
        return (
            <Typography variant="h4">
                Congrats!
            </Typography>
        );
    }

    const getLost = () => {
        return (
            <Typography variant="h4">
                Better luck next time!
            </Typography>
        );
    }

    const won = getWon();
    const lost = getLost();
    
    return (
        <Box>
            { gameState === "WON" && won }
            { gameState === "LOST" && lost }
            <Typography variant="h5">
                The answer was: Entangled Path
            </Typography>
            <Button variant="contained" onClick={onCopyClick}>
                Share Results
                <ContentCopyIcon/>
            </Button>
        </Box>
    );
}

export default Results;
