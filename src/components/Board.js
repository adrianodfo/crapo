import './Board.css';
import BoardRow from './BoardRow';

function Board() {
  return (
    <div className="Board">
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </div>
  );
}

export default Board;
