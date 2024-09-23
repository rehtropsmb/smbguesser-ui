import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Link, Box, Typography } from "@mui/material";

function InfoDialog({ open, setOpen }) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>
                <Typography variant="h5" sx={{ fontWeight: 'bold'}}>About SMB Guesser</Typography>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ margin:'15px'}}>
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>SMB Guesser</Typography>
                    {` is a daily puzzle game inspired by games like `}
                    <Link href="https://www.nytimes.com/games/wordle/index.html">Wordle</Link>
                    {` and `}
                    <Link href="https://guessthe.game/">GuessTheGame</Link>
                    {`.`}
                </Box>
                <Box sx={{ margin:'15px'}}>
                    {`Every day a new stage will be selected, and you will be shown a screenshot.
                    Try your best to guess the stage name! If you are incorrect (or if you click skip),
                    you will be shown additional screenshots.`}
                </Box>
                <Box sx={{ margin:'15px'}}>
                    {`You get `}
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>6 guesses</Typography>
                    {` in total. Once all guesses have been used,
                    the stage will be revealed. Stages will be a mix of both `}
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>custom and vanilla stages from Super Monkey Ball 2</Typography>
                    {`.`}
                </Box>
                <Box sx={{ margin:'15px'}}>
                    {`The next day's puzzle begins at 4:00 UTC (midnight EDT). Good luck!`}
                </Box>
                <Box sx={{ margin:'15px'}}>
                    {`Find a bug? Send a message to `}
                    <Typography variant="body" sx={{ fontWeight: 'bold'}}>rehtrop</Typography>
                    {` on Discord.`}
                </Box>

            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => setOpen(false)}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default InfoDialog;
