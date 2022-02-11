import './Deck.css';
import CardPile from './CardPile';
import Discard from './Discard';
import Crapo from './Crapo';

function Deck(props) {
  return (
    <div className="Deck">
      <CardPile CardPile={props.CardPile} />
      <Discard Discard={props.Discard} onCardPlaced={card => props.onDiscard(card)}/>
      <Crapo Crapo={props.Crapo} OriginIndex={props.OriginIndex}/>
    </div>
  );
}

export default Deck;
