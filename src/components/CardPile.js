import './CardPile.css';
import cardback from '../resources/cardback.png';

function CardPile() {
  return (
    <div className="CardPile"style={{
      backgroundImage: `url(${cardback})`,
      backgroundRepeat: "repeat"
    }}>
    </div>
  );
}

export default CardPile;
