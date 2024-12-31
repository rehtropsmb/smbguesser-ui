import { Typography, Button, Box, IconButton, Dialog, DialogContent, DialogActions } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InfoIcon from '@mui/icons-material/Info';
import { useMemo, useState } from "react";
import InfoDialog from "./InfoDialog";
import { BarChart } from '@mui/x-charts';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function TopBar({ gameHistory }) {
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [leaderboardDialogOpen, setLeaderboardDialogOpen] = useState(false);

    const played = gameHistory.length;
    const won = gameHistory.filter(p => p.state === 'W').length;
    const winrate = played !== 0 ? Math.floor((won / played) * 100) : 0;

    const maxStreak = useMemo(() => {
        if (gameHistory.length < 1) { return 0; }
        let currentStreak = 0;
        let longestStreak = 0;
        let currPuzzle = gameHistory[0].puzzle;

        for (let i = 0; i < gameHistory.length; i++) {
            if (currentStreak === 0) {
                currPuzzle = gameHistory[i].puzzle;
            }
            if (gameHistory[i].state === 'W' && gameHistory[i].puzzle === currPuzzle) {
                currentStreak++;
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
                currPuzzle++;
            } else {
                currentStreak = 0;
            }
        }

        return longestStreak;
    }, [gameHistory]);

    const streak = useMemo(() => {
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
    }, [gameHistory]);

    const average = useMemo(() => {
        if (won < 1) { return 0; }
        const total = gameHistory.reduce((prev, curr) => {
            if (curr.state === 'W') {
                return prev + curr.score;
            }
            return prev;
        }, 0)
        return (total / won).toFixed(2);
    }, [gameHistory, won]);

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
            <Box sx={{ display: 'flex', flexDirection: 'row', verticalAlign: 'middle', margin: '15px' }}>
                <TravelExploreIcon sx={{ transform: 'scale(2.0)', margin: '15px 6px 0px' }}/>
                <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Gabarito', margin: '8px', font: 'Gabarito', }}>
                    SMB Guesser
                </Typography>
                <IconButton onClick={() => setLeaderboardDialogOpen(true)} sx={{ marginLeft: '0px' }}>
                    <LeaderboardIcon sx={{ color: '#603F26' }}/>
                </IconButton>
                <IconButton onClick={() => setInfoDialogOpen(true)}>
                    <InfoIcon  sx={{ color: '#603F26' }}/>
                </IconButton>
                {/* <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton> */}
            </Box>
            <InfoDialog open={infoDialogOpen} setOpen={setInfoDialogOpen}/>
            <Dialog open={leaderboardDialogOpen}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h5" sx={{ fontWeight: 'bold', margin: '20px 20px 0px' }}>SMB Guesser Stats</Typography>
                </Box>
                <DialogContent sx={{ padding: '0px'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', padding: '5px' }}>
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
                                Win Rate
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
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                { average }
                            </Typography>
                            <Typography variant="caption">
                                Average
                            </Typography>
                        </Box>
                    </Box>
                    <BarChart
                        height={300}
                        colors={['#468966']}
                        slotProps={{ legend: { hidden: true }}}
                        series={[
                        { data: data, label: '# of days', id: 'uvId' },
                        ]}
                        xAxis={[{ label: 'Number of Guesses', data: xLabels, scaleType: 'band' }]}
                        sx={{ margin: 'auto' }}
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