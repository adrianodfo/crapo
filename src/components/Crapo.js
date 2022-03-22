import './Crapo.css';
import Drag from '../dragAndDrop/Drag';
import Drop from '../dragAndDrop/Drop';
import { Card } from './Card';

function Crapo(props) {
  const hasCard = props.Crapo && props.Crapo.length > 0;
  let card = {};
  if (hasCard) {
    let topCard = props.Crapo[props.Crapo.length - 1];
    card = { Index: topCard.Index, Suit: topCard.Suit };
  }
  const cardDropped = (droppedCard) => {
    props.onCardPlaced(droppedCard, props.DropTarget);
  }
  return hasCard ?
    (<div className="Crapo">
      <Drag dataItem={
        {
          Card: { ...card },
          Origin: "Crapo",
          OriginIndex: props.OriginIndex
        }
      }>
        <Drop onDropped={cardDropped}>
          <Card {...card} />
        </Drop>
      </Drag>
    </div>)
    : "";
}

export default Crapo;
