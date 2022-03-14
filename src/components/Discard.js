import './Discard.css';
import { Card } from './Card';
import Drop from '../dragAndDrop/Drop';

function Discard(props) {
  const cardDropped = (droppedCard) => {
    props.onCardPlaced(droppedCard);
  }
  
  let discardLength = props.Discard.length;
  let card = "";

  if( discardLength > 0 )
  {
    const topCard = props.Discard[discardLength - 1];
    card =  <Card {...topCard} />
  }
  else{
    //Todo: make CardPlaceholder a component?
    card = <div className="CardPlaceholder"></div>
  }
    
  return (
    <Drop onDropped={cardDropped}>
      {card}
    </Drop>);
}

export default Discard;
