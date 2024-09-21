import { Typography, Box, Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Results({ gameState, onCopyClick, stage }) {

    if (gameState === "PLAYING") {
        return null;
    }

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
            <Button variant="contained" onClick={onCopyClick}>
                Share Results
                <ContentCopyIcon sx={{ marginLeft: '5px'}}/>
            </Button>
        </Box>
    );
}

export default Results;
