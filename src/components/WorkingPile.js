import "./WorkingPile.css";
import Drag from '../dragAndDrop/Drag';
import Drop from '../dragAndDrop/Drop';
import { Card } from "./Card";

function WorkingPile(props) {
  let cards;
  const itemDropped = item => { alert(item.Index + " " + item.Suit); }
  if (props.Cards) {
    cards = (props.Cards.map((card, mapIndex) => renderCard(card, mapIndex)));
  }
  return (
    <div className="WorkingPile">
      {cards}
    </div>
  );
  function renderCard(card, mapIndex) {
    return (
      <Drag dataItem={{ Index: card.Index, Suit: card.Suit }}>
        <Drop onDropped={itemDropped}>
          <Card Index={card.Index} Suit={card.Suit} Key={mapIndex} ZIndex={mapIndex} />
        </Drop>
      </Drag>);
  }
}

export default WorkingPile;
