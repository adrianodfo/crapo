import './Deck.css';
import CardPile from './CardPile';
import Discard from './Discard';
import Crapo from './Crapo';

function Deck(props) {
  return (
    <div className="Deck">
      <CardPile CardPile={props.CardPile} onPileClicked={props.onPileClicked} OriginIndex={props.OriginIndex}/>
      <Discard Discard={props.Discard} onCardPlaced={card => props.onDiscard(card)}/>
      <Crapo Crapo={props.Crapo} OriginIndex={props.OriginIndex} onCardPlaced={card => props.onCrapo(card, props.DropTarget)} />
    </div>
  );
}

export default Deck;
