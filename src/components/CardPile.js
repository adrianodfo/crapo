import './CardPile.css';
import Drag from '../dragAndDrop/Drag';
import { Card } from "./Card";

function CardPile(props) {
  const topCard = getTopCard(props.CardPile);
  if (topCard.IsOpen) {
    return renderCard(topCard);
  }
  return (
    <div
      className="CardPile back"
      onClick={props.onPileClicked}>
    </div>
  );
  function renderCard(card) {
    return (
      <Drag
        dataItem={{
          Card: { ...card },
          Origin: "CardPile",
          OriginIndex: props.OriginIndex
        }}>
        <Card {...card} />
      </Drag>);
  };
  function getTopCard(cardPile) {
    if (cardPile && cardPile.length > 0) {
      return cardPile[cardPile.length - 1];
    } else {
      return {};
    }
  };
}

export default CardPile;
