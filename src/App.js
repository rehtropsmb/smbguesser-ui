import { Typography } from '@mui/material';
import Game from './app/Game';
import stages from "./data/stages";

const style = {
    textAlign: 'center',
    backgroundColor: '#FFEAC5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'black'
};

function App() {
    const getPuzzleNumber = () => {
        const startDate = new Date('2024-09-23T00:00:00-04:00'); // Midnight ET on 9/22/2024
        const now = new Date();
        
        const diff = now - startDate;
        const day = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

        return day;
    };

    const puzzleNumber = getPuzzleNumber();
    const stage = stages[puzzleNumber - 1] ?? { name: '', pack: '', slot: ''};

    return (
        <div style={style}>
            { stage.name && (<Game puzzleNumber={puzzleNumber} stage={stage}/>)}
            { !stage.name && <Typography variant="h4" sx={{ margin: '10px'}}>SMB Guesser has ran out of prepared stages :(</Typography>}
        </div>
    );
};

export default App;
