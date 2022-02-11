import './Crapo.css';
import Drag from '../dragAndDrop/Drag';
import Drop from '../dragAndDrop/Drop';
import { Card } from './Card';

function Crapo(props) {
  const hasCard = props.Crapo && props.Crapo.length > 0;
  let card = {};
  if (hasCard) {
    let topCard = props.Crapo[props.Crapo.length - 1];
    card = { Index: topCard.Index, Suit: topCard.Suit };
  }
  const itemDropped = item => { /* todo */ }
  return hasCard ?
    (<div className="Crapo">
      <Drag dataItem={
        {
          Card: { Index: card.Index, Suit: card.Suit },
          Origin: "Crapo",
          OriginIndex: props.OriginIndex
        }
      }>
        <Drop onDropped={itemDropped}>
          <Card Index={card.Index} Suit={card.Suit} />
        </Drop>
      </Drag>
    </div>)
    : "";
}

export default Crapo;
