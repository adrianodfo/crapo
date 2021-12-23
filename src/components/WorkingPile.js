import "./WorkingPile.css";
import {Card, Suits} from "./Card";

function WorkingPile(props) {

  var cards;

  if(props.Cards)
  {
    cards = (props.Cards.map((card, mapIndex) => renderCard(card, mapIndex)));
  }

  return (
      <div className="WorkingPile">
      {cards}
      </div>
  );

  function renderCard(card, mapIndex){
    return(<Card 
      Index={card.Index} 
      Suit={card.Suit}
      Key={mapIndex}
      ZIndex={mapIndex} />);
  }
}

export default WorkingPile;
