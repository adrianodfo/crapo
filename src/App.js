import './App.css';
import background_green from './resources/background-green.png';
import Deck from './components/Deck';
import Board from './components/Board';
import Game from './game/game';
import { useState } from 'react';

export default function App() {
  const game = new Game();
  const [computarPile, setComputarPile] = useState(game.computarPile);
  const [computerDiscard, setComputerDiscard] = useState(game.computerDiscard);
  const [computerCrapo, setComputarCrapo] = useState(game.computerCrapo);
  const [workingPiles, setWorkingPiles] = useState(game.workingPiles);
  const [userPile, setUserPile] = useState(game.userPile);
  const [userDiscard, setUserDiscard] = useState(game.userDiscard);
  const [userCrapo, setUserCrapo] = useState(game.userCrapo);
  const onUserDiscard = (droppedCard) => {
    setUserDiscard(previousState => processDiscard(previousState, droppedCard));
  };
  const onComputerDiscard = (droppedCard) => {
    setComputerDiscard(previousState => processDiscard(previousState, droppedCard));
  };
  const removeCardFromOrigin = (droppedCard) => {
    if (droppedCard.Origin === "WorkingPile") {
      let originIndex = droppedCard.OriginIndex;
      setWorkingPiles(previousState => {
        let workingPiles = previousState.slice();
        workingPiles[originIndex].splice(-1, 1);
        return workingPiles;
      });
    }
  };
  const processDiscard = (previousState, droppedCard) => {
    let discard = previousState.slice();
    discard.push(droppedCard.Card);
    removeCardFromOrigin(droppedCard);
    return discard;
  };
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${background_green})`,
        backgroundSize: "cover",
        height: "100vh"
      }}>
      <Deck
        CardPile={computarPile}
        Discard={computerDiscard} onDiscard={onComputerDiscard}
        Crapo={computerCrapo} />
      <Board WorkingPiles={workingPiles} />
      <Deck
        CardPile={userPile}
        Discard={userDiscard} onDiscard={onUserDiscard}
        Crapo={userCrapo} />
    </div>
  );
}
