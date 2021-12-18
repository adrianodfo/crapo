import './App.css';
import background_green from './resources/background-green.png';
import Deck from './components/Deck';
import Board from './components/Board';
import Game from './game/game';


function App() {

  const game = new Game();

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${background_green})`,
        backgroundSize: "cover",
        height: "100vh"
      }}>
      <Deck />
      <Board />
      <Deck />
    </div>
  );
}

export default App;
