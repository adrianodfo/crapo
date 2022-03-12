import './CardPile.css';
import cardback from '../resources/cardback.png';
import Drag from '../dragAndDrop/Drag';
import { Card } from "./Card";

function CardPile(props) {
  const topCard = getTopCard(props.CardPile);
  if (topCard.IsOpen) {
    return renderCard(topCard);
  }
  return (
    <div
      className="CardPile"
      onClick={props.onPileClicked}
      style={{
        backgroundImage: `url(${cardback})`,
        backgroundRepeat: "repeat"
      }}>
    </div>
  );
  function renderCard(card) {
    return (
      <Drag
        dataItem={{
          Card: { Index: card.Index, Suit: card.Suit },
          Origin: "CardPile",
          OriginIndex: props.OriginIndex
        }}>
        <Card Index={card.Index} Suit={card.Suit} />
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
