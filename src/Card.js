import './Card.css';

export function Card(props) {
  return (
    <div className="Card" style={props.OverrideStyle}>
      <span>{props.Index}</span>
      <div>{props.Suit}</div>
    </div>
  );
}

export const Suits =
{
  Spade: '\u2660',
  Club: '\u2663',
  Heart: '\u2665',
  Diamond: '\u2666'
};

