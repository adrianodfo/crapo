import './Board.css';
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

export default function Board(props) {
  const cardDropped = (droppedCard, dropTarget) => {
    props.onCardPlaced(droppedCard, dropTarget);
  }

  const cardStacked = (stackedCard, dropTarget) => {
    props.onCardStacked(stackedCard, dropTarget);
  }

  const board = [];

  for (var index = 0; index < 8; index++) {
    board.push((
      <div Key={index}>
        <WorkingPile
          Cards={props.WorkingPiles[index]}
          OriginIndex={index}
          DropTarget={index}
          onCardPlaced={cardDropped} />
        <Stack
          TopCard={props.Stacks[index]}
          onCardPlaced={cardStacked}
          DropTarget={index} />
      </div>
    ));
  }

  return <div className="Board">
    {board}
  </div>
}
