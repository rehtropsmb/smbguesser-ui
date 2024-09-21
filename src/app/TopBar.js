import { Typography, Button, Box, IconButton, Dialog, DialogContent, DialogActions } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import InfoDialog from "./InfoDialog";
import { BarChart } from '@mui/x-charts';

function TopBar({ gameHistory }) {
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [leaderboardDialogOpen, setLeaderboardDialogOpen] = useState(false);

    // const raw = [
    //     { puzzle: 1, score: 1, state: 'W' },
    //     { puzzle: 2, score: 5, state: 'L' },
    //     { puzzle: 3, score: 4, state: 'W' },
    //     { puzzle: 4, score: 3, state: 'W' },
    //     { puzzle: 5, score: 5, state: 'W' },
    //     { puzzle: 6, score: 5, state: 'L' },
    //     { puzzle: 7, score: 5, state: 'W' },
    //     { puzzle: 8, score: 2, state: 'W' },
    //     { puzzle: 9, score: 2, state: 'W' },
    //     { puzzle: 10, score: 1, state: 'W' },
    //     { puzzle: 11, score: 1, state: 'W' },
    //     { puzzle: 12, score: 2, state: 'W' },
    //     { puzzle: 13, score: 4, state: 'W' },
    //     { puzzle: 14, score: 4, state: 'W' },
    //     { puzzle: 15, score: 2, state: 'W' },
    //     { puzzle: 16, score: 1, state: 'W' },
    //     { puzzle: 17, score: 3, state: 'W' },
    //     { puzzle: 18, score: 5, state: 'L' },
    //     { puzzle: 19, score: 5, state: 'L' },
    //     { puzzle: 20, score: 3, state: 'W' },
    //     { puzzle: 23, score: 1, state: 'W' },
    //     { puzzle: 24, score: 4, state: 'W' },
    //     { puzzle: 25, score: 4, state: 'W' },
    // ];

    const played = gameHistory.length;
    const won = gameHistory.filter(p => p.state === 'W').length;
    const winrate = played !== 0 ? Math.floor((won / played) * 100) : 0;

    const calculateCurrentStreak = () => {
        if (gameHistory.length < 1) { return 0; }
        let streak = 0;
        let currPuzzle = gameHistory[gameHistory.length - 1].puzzle;

        for (let i = gameHistory.length - 1; i >= 0; i--) {
            if (gameHistory[i].state === 'W' && gameHistory[i].puzzle === currPuzzle) {
                streak++
            } else { break; }
            currPuzzle--;
        }
        return streak;
    };
    const streak = calculateCurrentStreak();
    const maxStreak = streak;

    const data = [
        gameHistory.filter(p => (p.state === 'W' && p.score === 1)).length,
        gameHistory.filter(p => (p.state === 'W' && p.score === 2)).length,
        gameHistory.filter(p => (p.state === 'W' && p.score === 3)).length,
        gameHistory.filter(p => (p.state === 'W' && p.score === 4)).length,
        gameHistory.filter(p => (p.state === 'W' && p.score === 5)).length,
    ]
    const xLabels = [1, 2, 3, 4, 5];

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    SMB Guesser
                </Typography>
                <IconButton onClick={() => setLeaderboardDialogOpen(true)} sx={{ marginLeft: '100px'}}>
                    <LeaderboardIcon/>
                </IconButton>
                <IconButton onClick={() => setInfoDialogOpen(true)}>
                    <InfoIcon></InfoIcon>
                </IconButton>
                {/* <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton> */}
            </Box>
            <InfoDialog open={infoDialogOpen} setOpen={setInfoDialogOpen}/>
            <Dialog open={leaderboardDialogOpen}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', margin: '20px 20px 0px' }}>SMB Guesser Stats</Typography>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                { played }
                            </Typography>
                            <Typography variant="caption">
                                Played
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                { won }
                            </Typography>
                            <Typography variant="caption">
                                Won
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                { winrate }%
                            </Typography>
                            <Typography variant="caption">
                                Win %
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                { streak }
                            </Typography>
                            <Typography variant="caption">
                                Current Streak
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                { maxStreak }
                            </Typography>
                            <Typography variant="caption">
                                Max Streak
                            </Typography>
                        </Box>
                    </Box>
                    <BarChart
                        width={350}
                        height={300}
                        slotProps={{ legend: { hidden: true }}}
                        series={[
                        { data: data, label: 'uv', id: 'uvId' },
                        ]}
                        xAxis={[{ label: 'Number of Guesses', data: xLabels, scaleType: 'band' }]}
                        tooltip={{ trigger: 'none' }}
                        sx={{ margin: '0px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => setLeaderboardDialogOpen(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default TopBar;