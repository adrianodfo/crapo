import './Board.css';
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

export default function Board(props) {
  return (
    //TODO: is it possible to eliminate Board and BoardRow?
    <div className="Board">
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[0]} OriginIndex="0" />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[1]} OriginIndex="1" />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[2]} OriginIndex="2"/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[3]} OriginIndex="3" />
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[4]} OriginIndex="4"/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[5]} OriginIndex="5"/>
          <Stack />
        </div>
      </div>
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={props.WorkingPiles[6]} OriginIndex="6"/>
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile Cards={props.WorkingPiles[7]} OriginIndex="7"/>
          <Stack />
        </div>
      </div>
    </div>
  );
}
