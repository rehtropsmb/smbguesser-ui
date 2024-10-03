import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Link, Box, Typography } from "@mui/material";

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
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>October 3rd, 2024</Typography>
                </Box>
                <Box sx={{ margin:'15px'}}>
                    <Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '15px' }}>
                        {`Please fill out `}
                        <Link href="https://forms.gle/GSYZzQM8vbtB1AWj8" sx={{ fontWeight: 'bold'}}>this survey</Link>
                        {` to help determine which packs may come to SMB Guesser in the future!`}
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
