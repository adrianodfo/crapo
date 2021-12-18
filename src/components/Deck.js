import './Deck.css';
import CardPile from './CardPile';
import Discard from './Discard';
import Crapo from './Crapo';

function Deck() {
  return (
    <div className="Deck">
      <CardPile />
      <Discard />
      <Crapo />
    </div>
  );
}

export default Deck;
