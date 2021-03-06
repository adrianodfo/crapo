import "./WorkingPile.css";
import Drag from '../dragAndDrop/Drag';
import Drop from '../dragAndDrop/Drop';
import { Card } from "./Card";

function WorkingPile(props) {
  let cards;
  const cardDropped = (droppedCard) => {
    props.onCardPlaced(droppedCard, props.DropTarget);
  }

  if (props.Cards && props.Cards.length > 0) {
    cards = (props.Cards.map((card, mapIndex) => renderCard(card, mapIndex)));
  }
  else {
    cards = renderEmptyPile();
  }
  let styles = "WorkingPile";
  if (props.OriginIndex % 2 == 0) {
    styles += " Left";
  }
  return (
    <div className={styles}>
      {cards}
    </div>
  );
  function renderCard(card, mapIndex) {
    return (
      <Drag Key={mapIndex}
        dataItem={{
          Card: {...card},
          Origin: "WorkingPile",
          OriginIndex: props.OriginIndex
        }}>
        <Drop onDropped={cardDropped}>
          <Card Index={card.Index} Suit={card.Suit} IndexNumber={card.IndexNumber} />
        </Drop>
      </Drag>);
  }
  function renderEmptyPile() {
    return (
      <Drop onDropped={cardDropped}>
         <div className="CardPlaceholder"></div>
      </Drop>);
  }
}

export default WorkingPile;
