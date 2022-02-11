import './App.css';
import background_green from './resources/background-green.png';
import Deck from './components/Deck';
import Board from './components/Board';
import Game from './game/game';
import { useState } from 'react';

export default function App() {
  const game = new Game();
  const [computerPile, setComputerPile] = useState(game.computarPile);
  const [computerDiscard, setComputerDiscard] = useState(game.computerDiscard);
  const [computerCrapo, setComputerCrapo] = useState(game.computerCrapo);
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
    switch(droppedCard.Origin)
    {
    case "WorkingPile":
      setWorkingPiles(previousState => {
        let workingPiles = previousState.slice();
        workingPiles[droppedCard.OriginIndex].splice(-1, 1);
        return workingPiles;
      });
      break;
    case "Crapo":
      //todo: OriginIndex="0" means computer. Need to find a better way
      //todo: extract new crapo to a common method.
      if( droppedCard.OriginIndex == 0 )  {
        setComputerCrapo(previousState => {
          let newCrapo= previousState.slice();
          newCrapo.splice(-1,1);
          return newCrapo;
        });
      }
      else{
        setUserCrapo(previousState => {
          let newCrapo= previousState.slice();
          newCrapo.splice(-1,1);
          return newCrapo;
        });
      }
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
        CardPile={computerPile}
        Discard={computerDiscard} onDiscard={onComputerDiscard}
        Crapo={computerCrapo} OriginIndex="0"/>
      <Board WorkingPiles={workingPiles} />
      <Deck
        CardPile={userPile}
        Discard={userDiscard} onDiscard={onUserDiscard}
        Crapo={userCrapo} OriginIndex="1"/>
    </div>
  );
}
