import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function TimeRemaining() {

    const [timeRemaining, setTimeRemaining] = useState(getTimeToMidnight());
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const time = getTimeToMidnight();
            setTimeRemaining(Math.max(0, time));
            if (time < 1_500) {
                setReady(true);
            }
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    // function getTimeToMidnight() {
    //     const now = new Date();
    //     const date = now.getUTCHours() < 5 ? now.getUTCDate() : now.getUTCDate() + 1;
    //     const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), date, 5, 0, 0));
    //     const diff = midnight - now;
    //     return diff;
    // }

    function getTimeToMidnight() {
        const now = new Date();
        const date = now.getUTCHours() < 4 ? now.getUTCDate() : now.getUTCDate() + 1;
        const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), date, 4, 0, 0));
        const diff = midnight - now;
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
                { !ready ? 'Next Game In...' : 'Refresh to load next game!' }
            </Typography>
            <Typography variant="h5">
                { !ready ? formatTimeRemaining(timeRemaining) : formatTimeRemaining(0) }
            </Typography>
        </Box>
    );
}

export default TimeRemaining;
