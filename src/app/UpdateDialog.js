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
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>February 28th, 2025</Typography>
                </Box>
                <Box sx={{ margin:'15px'}}>
                    <Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '15px' }}>
                        Thanks to Nambo, 31 more days of guesser have been prepared to
                        happen over the month of March! Season 2 will be starting March 1st.
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
