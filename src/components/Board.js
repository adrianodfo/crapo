import './Board.css';
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

export default function Board(props) {
  return (
    <div className="Board">
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[0]} WorkingPileIndex="0" />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[1]} WorkingPileIndex="1" />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[2]} WorkingPileIndex="2"/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[3]} WorkingPileIndex="3" />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[4]} WorkingPileIndex="4"/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[5]} WorkingPileIndex="5"/>
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[6]} WorkingPileIndex="6"/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[7]} WorkingPileIndex="7"/>
          <Stack />
        </div>
      </div>
    </div>
  );
}
