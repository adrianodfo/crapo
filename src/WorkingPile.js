import './WorkingPile.css';
import {Card, Suits} from './Card';

function WorkingPile() {
  return (
      <div className="WorkingPile">
        <Card Index="9" Suit={Suits.Diamond} />
        <Card Index="10" Suit={Suits.Spade} />
      </div>
  );
}

export default WorkingPile;
