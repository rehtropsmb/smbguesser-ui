import { Typography, Box } from '@mui/material';
import Game from './app/Game';
import stages from "./data/stages";
import TimeRemaining from './app/TimeRemaining';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

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
        const startDate = new Date('2024-09-24T00:00:00-05:00'); // Midnight ET on 9/24/2024
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
            { !stage.name && (
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'row', verticalAlign: 'middle', margin: '15px' }}>
                        <TravelExploreIcon sx={{ transform: 'scale(2.0)', margin: '15px 6px 0px' }}/>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Gabarito', margin: '8px', font: 'Gabarito' }}>
                            SMB Guesser
                        </Typography>
                    </Box>
                    <Typography variant="body1">No stage prepared for day #{puzzleNumber}.</Typography>
                    <Typography variant="body1">Thanks so much for enjoying my game!</Typography>
                    <Typography variant="body1">-rehtrop</Typography>
                    <TimeRemaining/>
                </>
            )}
        </div>
    );
};

export default App;
