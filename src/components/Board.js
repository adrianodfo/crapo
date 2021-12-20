import './Board.css';
import BoardRow from './BoardRow';

function Board(props) {
  let row1Piles = props.WorkingPiles.slice(0,2);
  let row2Piles = props.WorkingPiles.slice(2,4);
  let row3Piles = props.WorkingPiles.slice(4,6);
  let row4Piles = props.WorkingPiles.slice(6,8);
  return (
    <div className="Board">
      <BoardRow WorkingPiles={row1Piles}/>
      <BoardRow WorkingPiles={row2Piles}/>
      <BoardRow WorkingPiles={row3Piles}/>
      <BoardRow WorkingPiles={row4Piles}/>
    </div>
  );
}

export default Board;
