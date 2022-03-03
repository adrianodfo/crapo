import "./WorkingPile.css";
import Drag from '../dragAndDrop/Drag';
import Drop from '../dragAndDrop/Drop';
import { Card } from "./Card";

function WorkingPile(props) {
  let cards;
  const cardDropped = (droppedCard) => {
    props.onCardPlaced(droppedCard, props.DropTarget);
  }
  if (props.Cards) {
    cards = (props.Cards.map((card, mapIndex) => renderCard(card, mapIndex)));
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
      <Drag dataItem={
        {
          Card: { Index: card.Index, Suit: card.Suit },
          Origin: "WorkingPile",
          OriginIndex: props.OriginIndex
        }
      }>
        <Drop onDropped={cardDropped}>
          <Card Index={card.Index} Suit={card.Suit} Key={mapIndex} />
        </Drop>
      </Drag>);
  }
}

export default WorkingPile;
