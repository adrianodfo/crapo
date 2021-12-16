import "./Card.css";

export function Card(props) {

  var color = (props.Suit == Suits.Club || props.Suit == Suits.Spade) ? "black" : "red";

  const cardStyle = {
    marginLeft: props.MarginLeft? props.MarginLeft : 0,
    zIndex: props.ZIndex,
    color: color
  };  

  return (
    <div className="Card" style={cardStyle}>
      <div className="CardIndexColumn">
        <span>{props.Index}</span>
        <div>{props.Suit}</div>
      </div>
      <div className="CardIndexColumn Reverse">
        <span>{props.Index}</span>
        <div>{props.Suit}</div>
      </div>
    </div>
  );
}

export const Suits =
{
  Spade: "\u2660",
  Club: "\u2663",
  Heart: "\u2665",
  Diamond: "\u2666"
};

