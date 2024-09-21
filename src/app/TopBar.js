import { Typography, Button, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import InfoDialog from "./InfoDialog";
import { BarChart } from '@mui/x-charts';

function TopBar() {
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [leaderboardDialogOpen, setLeaderboardDialogOpen] = useState(false);

    const uData = [1, 2, 5, 8, 1];
    const xLabels = [1, 2, 3, 4, 5];

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <Typography variant="h4">
                    SMB Guesser
                </Typography>
                <IconButton onClick={() => setLeaderboardDialogOpen(true)}>
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
                <DialogTitle>
                    SMB Guesser Stats
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                38
                            </Typography>
                            <Typography variant="caption">
                                Played
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                3
                            </Typography>
                            <Typography variant="caption">
                                Won
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                85%
                            </Typography>
                            <Typography variant="caption">
                                Win %
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                0
                            </Typography>
                            <Typography variant="caption">
                                Current Streak
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h5">
                                5
                            </Typography>
                            <Typography variant="caption">
                                Max Streak
                            </Typography>
                        </Box>
                    </Box>
                    <BarChart
                        width={500}
                        height={300}
                        slotProps={{ legend: { hidden: true }}}
                        series={[
                        { data: uData, label: 'uv', id: 'uvId' },
                        ]}
                        xAxis={[{ label: 'Number of Guesses', data: xLabels, scaleType: 'band' }]}
                        tooltip={{ trigger: 'none' }}
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