import './Board.css';
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

export default function Board(props) {
  return (
    <div className="Board">
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[0]} />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[1]} />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[2]} />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[3]} />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[4]} />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[5]} />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[6]} />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[7]} />
          <Stack />
        </div>
      </div>
    </div>
  );
}
