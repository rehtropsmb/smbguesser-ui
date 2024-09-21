import { Typography, Button, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import InfoDialog from "./InfoDialog";

function TopBar() {
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [leaderboardDialogOpen, setLeaderboardDialogOpen] = useState(false);

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'horizontal', verticalAlign: 'center' }}>
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
                    heres ur stats
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