import './Board.css';
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

export default function Board(props) {
  const cardDropped = (droppedCard, dropTarget) => {
    props.onCardPlaced(droppedCard, dropTarget);
  }

  const board = props.WorkingPiles.map((element, index) => {
    return (
      <div>
        <WorkingPile 
          Cards={element}
          OriginIndex={index}
          DropTarget={index}
          onCardPlaced={cardDropped}
          Key={index} />
        <Stack />
      </div>
    );
  });

  return <div className="Board">
    {board}
  </div>
}
