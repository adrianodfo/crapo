import './Crapo.css';
import { Card } from './Card';

function Crapo(props) {
  const hasCard = props.Crapo && props.Crapo.length > 0;
  let card = {};
  if (hasCard) {
    let topCard = props.Crapo[props.Crapo.length - 1];
    card = { Index: topCard.Index, Suit: topCard.Suit };
  }
  return hasCard ?
    (<div className="Crapo">
      <Card Index={card.Index} Suit={card.Suit} />
    </div>)
    : "";
}

export default Crapo;
