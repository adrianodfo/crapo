import './App.css';
import Deck from './components/Deck';
import Board from './components/Board';
import Game from './game/game';
import { useState } from 'react';

export default function App() {
  const game = new Game();
  const [computerPile, setComputerPile] = useState(game.computerPile);
  const [computerDiscard, setComputerDiscard] = useState(game.computerDiscard);
  const [computerCrapo, setComputerCrapo] = useState(game.computerCrapo);
  const [workingPiles, setWorkingPiles] = useState(game.workingPiles);
  const [stacks, setStacks] = useState(game.stacks);
  const [userPile, setUserPile] = useState(game.userPile);
  const [userDiscard, setUserDiscard] = useState(game.userDiscard);
  const [userCrapo, setUserCrapo] = useState(game.userCrapo);

  const onComputerDiscard = (droppedCard) => {
    setComputerDiscard(previousState => processDiscard(previousState, droppedCard));
  };

  const onComputerCrapo = (droppedCard) => {
    setComputerCrapo(previousState => processCrapo(previousState, droppedCard));
  };

  const onUserDiscard = (droppedCard) => {
    setUserDiscard(previousState => processDiscard(previousState, droppedCard));
  };

  const onUserCrapo = (droppedCard) => {
    setUserCrapo(previousState => processCrapo(previousState, droppedCard));
  };

  const onWorkingPile = (droppedCard, targetIndex) => {
    setWorkingPiles(previousState => processWorkingPiles(previousState, droppedCard, targetIndex));
  };

  const onStack = (droppedCard, targetIndex) => {
    const hasCardOnStack = !!stacks[targetIndex];
    const canDrop = !hasCardOnStack && droppedCard.Card.Index == 'A'
      || hasCardOnStack && droppedCard.Card.IndexNumber === stacks[targetIndex].IndexNumber + 1;
    if (canDrop) {
      setStacks(previousState => processStacks(previousState, droppedCard, targetIndex));
    }
  };

  const onComputerPile = () => {
    setComputerPile(previousState => {
      let computerPile = previousState.slice();
      if (computerPile.length == 0 && computerDiscard.length > 0) {
        computerPile = computerDiscard.slice();
        setComputerDiscard([]);
      }
      if (computerPile.length > 0) {
        computerPile[computerPile.length - 1].IsOpen = true;
      }
      return computerPile;
    })
  };

  const onUserPile = () => {
    setUserPile(previousState => {
      let userPile = previousState.slice();
      if (userPile.length == 0 && userDiscard.length > 0) {
        userPile = userDiscard.slice();
        setUserDiscard([]);
      }
      if (userPile.length > 0) {
        userPile[userPile.length - 1].IsOpen = true;
      }
      return userPile;
    })
  };

  const removeCardFromOrigin = (droppedCard) => {
    switch (droppedCard.Origin) {
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
        if (droppedCard.OriginIndex === "0") {
          setComputerCrapo(previousState => {
            let newCrapo = previousState.slice();
            newCrapo.splice(-1, 1);
            return newCrapo;
          });
        }
        else {
          setUserCrapo(previousState => {
            let newCrapo = previousState.slice();
            newCrapo.splice(-1, 1);
            return newCrapo;
          });
        }
        break;
      case "CardPile":
        //todo: OriginIndex="0" means computer. Need to find a better way
        if (droppedCard.OriginIndex === "0") {
          setComputerPile(previousState => {
            let pile = previousState.slice();
            pile.splice(-1, 1);
            return pile;
          });
        }
        else {
          setUserPile(previousState => {
            let pile = previousState.slice();
            pile.splice(-1, 1);
            return pile;
          });
        }
      default:
        break;
    }
  };

  const processCrapo = (previousState, droppedCard) => {
    let crapo = previousState.slice();
    crapo.push(droppedCard.Card);
    removeCardFromOrigin(droppedCard);
    return crapo;
  };

  const processDiscard = (previousState, droppedCard) => {
    let discard = previousState.slice();
    discard.push(droppedCard.Card);
    removeCardFromOrigin(droppedCard);
    return discard;
  };

  const processWorkingPiles = (previousState, droppedCard, targetIndex) => {
    let workingPiles = previousState.slice();
    workingPiles[targetIndex].push(droppedCard.Card);
    removeCardFromOrigin(droppedCard);
    return workingPiles;
  };

  const processStacks = (previousState, droppedCard, targetIndex) => {
    let stacks = previousState.slice();
    stacks[targetIndex] = droppedCard.Card;
    removeCardFromOrigin(droppedCard);
    return stacks;
  };

  return (
    <div className="App">
      <Deck
        CardPile={computerPile} onPileClicked={onComputerPile}
        Discard={computerDiscard} onDiscard={onComputerDiscard}
        Crapo={computerCrapo} onCrapo={onComputerCrapo}
        OriginIndex="0" DropTarget="0" />
      <Board
        WorkingPiles={workingPiles} onCardPlaced={onWorkingPile}
        Stacks={stacks} onCardStacked={onStack} />
      <Deck
        CardPile={userPile} onPileClicked={onUserPile}
        Discard={userDiscard} onDiscard={onUserDiscard}
        Crapo={userCrapo} onCrapo={onUserCrapo}
        OriginIndex="1" DropTarget="1" />
    </div>
  );
}
