import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from "@mui/material";

function UpdateDialog({ open, setOpen, setUpdateDialogViewed }) {
    const handleClose = () => {
        setOpen(false);
        setUpdateDialogViewed();
    };

    return (
        <Dialog open={open}>
            <DialogTitle>
                <Typography variant="h5" sx={{ fontWeight: 'bold'}}>SMB Guesser Update</Typography>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ margin:'15px'}}>
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>December 24th, 2024</Typography>
                </Box>
                <Box sx={{ margin:'15px'}}>
                    <Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '15px' }}>
                        This season of SMB Guesser will be finishing on day 100 (January 1st 2025).
                        Thanks to everyone who has played and enjoyed SMB Guesser!
                        A second season of guessers will hopefully be coming soon.
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => handleClose()}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateDialog;
