import './Stack.css';
import { Card } from './Card';
import Drop from '../dragAndDrop/Drop';

function Stack(props) {
  const cardDropped = (droppedCard) => {
    props.onCardPlaced(droppedCard, props.DropTarget);
  }

  var isEmpty = !props.TopCard;
  var card = "";

  if (!isEmpty) {
    card = <Card {...props.TopCard} />;
  }

  return (
    <Drop onDropped={cardDropped}>
      <div className="Stack">{card}</div>
    </Drop>)
}

export default Stack;
