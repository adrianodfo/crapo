import "./BoardRow.css";
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";

function BoardRow(props) {
  let leftPile = props.WorkingPiles[0];
  let rightPile = props.WorkingPiles[1];
  return (
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={leftPile} />
          <Stack />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile  Cards={rightPile}/>
          <Stack />
        </div>
      </div>
  );
}

export default BoardRow;
