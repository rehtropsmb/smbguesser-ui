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
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>October 7th, 2024</Typography>
                </Box>
                <Box sx={{ margin:'15px'}}>
                    <Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '15px' }}>
                        Thanks to everyone who filled out the survey! The overwhelming majority of people wanted to see Deluxe and 651 stages, so puzzles from those packs will be coming soon!
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
