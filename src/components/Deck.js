import './Deck.css';
import CardPile from './CardPile';
import Discard from './Discard';
import Crapo from './Crapo';

function Deck(props) {
  return (
    <div className="Deck">
      <CardPile CardPile={props.CardPile} />
      <Discard Discard={props.Discard}/>
      <Crapo Crapo={props.Crapo}/>
    </div>
  );
}

export default Deck;