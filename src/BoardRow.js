import './BoardRow.css';
import WorkingPile from './WorkingPile';
import Stack from './Stack';
import {Suits} from './Card';

function BoardRow() {
  return (
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile />
          <Stack Index="A" Suit={Suits.Heart} />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile />
          <Stack />
        </div>
      </div>
  );
}

export default BoardRow;
