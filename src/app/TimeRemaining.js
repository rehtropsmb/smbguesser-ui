import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function TimeRemaining() {

    const [timeRemaining, setTimeRemaining] = useState(getTimeToMidnight());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(Math.max(0, getTimeToMidnight()));
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    function getTimeToMidnight() {
        const now = new Date();
        const easternTime = new Date(
          now.toLocaleString('en-US', { timeZone: 'America/New_York' })
        );
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const diff = midnight - easternTime;
        return diff;
    }

    const formatTimeRemaining = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    };

    return (
        <Box sx={{ margin: '20px'}}>
            <Typography variant="h6">
                { timeRemaining > 0 ? 'Next Game In...' : 'Refresh to load next game!'}
            </Typography>
            <Typography variant="h5">
                { formatTimeRemaining(timeRemaining) }
            </Typography>
        </Box>
    );
}

export default TimeRemaining;
