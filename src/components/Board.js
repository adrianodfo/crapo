import './Board.css';
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

export default function Board(props) {
  const cardDropped = (droppedCard, dropTarget) => {
    props.onCardPlaced(droppedCard, dropTarget);
  }
  return (
    //TODO: is it possible to eliminate Board and BoardRow?
    <div className="Board">
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[0]} OriginIndex="0" DropTarget="0" onCardPlaced={cardDropped} />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[1]} OriginIndex="1" DropTarget="1" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[2]} OriginIndex="2" DropTarget="2" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[3]} OriginIndex="3" DropTarget="3" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[4]} OriginIndex="4" DropTarget="4" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[5]} OriginIndex="5" DropTarget="5" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[6]} OriginIndex="6" DropTarget="6" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[7]} OriginIndex="7" DropTarget="7" onCardPlaced={cardDropped}/>
          <Stack />
        </div>
      </div>
    </div>
  );
}
