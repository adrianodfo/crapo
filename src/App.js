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
      <Deck CardPile={game.computarPile} Discard={game.computerDiscard} Crapo={game.computerCrapo} />
      <Board WorkingPiles={game.workingPiles}/>
      <Deck CardPile={game.userPile} Discard={game.userDiscard} Crapo={game.userCrapo} />
    </div>
  );
}

export default App;
