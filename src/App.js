import { Typography } from '@mui/material';
import Game from './app/Game';
import stages from "./data/stages";
// import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TopBar from "./app/TopBar";
import { useState, useMemo } from "react";

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
        // use after falling back an hour
        // const startDate = new Date('2024-09-24T00:00:00-05:00'); // Midnight ET on 9/24/2024
        // use after springing forwards an hour
        // const startDate = new Date('2024-09-24T00:00:00-04:00'); // Midnight ET on 9/24/2024
        // also make sure to update TimeRemaining.js
        const startDate = new Date('2024-11-21T00:00:00-05:00'); // Midnight ET on 9/24/2024

        const now = new Date();
        const diff = now - startDate;
        const day = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

        return day;
    };

    const puzzleNumber = getPuzzleNumber();
    const stage = stages[puzzleNumber - 1] ?? { name: '', pack: '', slot: ''};

    // stuff added to make stats still viewable
    
    const [gameHistory] = useState(() => {
        const saved = localStorage.getItem("gameHistory_3");
        const parsed = JSON.parse(saved);
        return parsed ?? {};
    });
    
    const gameHistoryArray = useMemo(() => {
        return Object.values(gameHistory).sort((a, b) => (a.puzzle - b.puzzle));
    }, [gameHistory]);

    return (
        <div style={style}>
            { stage.name && (<Game puzzleNumber={puzzleNumber} stage={stage}/>)}
            { (!stage.name) && (
                <>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', verticalAlign: 'middle', margin: '15px' }}>
                        <TravelExploreIcon sx={{ transform: 'scale(2.0)', margin: '15px 6px 0px' }}/>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Gabarito', margin: '8px', font: 'Gabarito' }}>
                            SMB Guesser
                        </Typography>
                    </Box> */}
                    <TopBar gameHistory={gameHistoryArray}/>
                    <Typography variant="body1">No stage prepared for today :c</Typography>
                    <Typography variant="body1">-rehtrop</Typography>
                    {/* <TimeRemaining/> */}
                </>
            )}
        </div>
    );
};

export default App;
