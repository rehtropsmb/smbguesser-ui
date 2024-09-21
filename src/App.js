import './App.css';
import Game from './app/Game';
import TopBar from './app/TopBar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <TopBar/>
        <Game number={1}/>
      </div>
    </div>
  );
}

export default App;
