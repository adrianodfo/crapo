import './Discard.css';
import { Card } from './Card';
import Drop from '../dragAndDrop/Drop';

function Discard(props) {
  let discardLength = props.Discard.length;
  let topCard = discardLength > 0 ? props.Discard[discardLength - 1] : {};
  const cardDropped = (droppedCard) => {
    props.onCardPlaced(droppedCard);
  }
  return (
    <Drop onDropped={cardDropped}>
      <Card {...topCard} />
    </Drop>);
}

export default Discard;
