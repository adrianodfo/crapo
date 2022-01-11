import "./Card.css";
import Drag from '../dragAndDrop/Drag';
import Drop from '../dragAndDrop/Drop';

export function Card(props) {
  var color = (props.Suit == Suits.Club || props.Suit == Suits.Spade) ? "black" : "red";
  const cardStyle = {
    zIndex: props.ZIndex,
    color: color
  };
  const itemDropped = item => {alert(item.Index + " " + item.Suit); }
  return (
    <Drag dataItem={{ Index: props.Index, Suit: props.Suit }}>
      <Drop onDropped={itemDropped}>
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
      </Drop>
    </Drag>
  );
}

export const Suits =
{
  Spade: "\u2660",
  Club: "\u2663",
  Heart: "\u2665",
  Diamond: "\u2666"
};
