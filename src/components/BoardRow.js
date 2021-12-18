import "./BoardRow.css";
import WorkingPile from "./WorkingPile";
import Stack from "./Stack";
import {Suits} from "./Card";

function BoardRow() {

  let cards = [ 
    {Index: 9, Suit: Suits.Diamond},
    {Index: 8, Suit: Suits.Club},
    {Index: 7, Suit: Suits.Heart},
    {Index: 6, Suit: Suits.Spade}
  ];

  return (
      <div className="BoardRow">
        <div class="BoardColumn Left">
          <WorkingPile Cards={cards} />
          <Stack Index="A" Suit={Suits.Heart} />
        </div>
        <div class="BoardColumn Right">
          <WorkingPile  Cards={cards}/>
          <Stack />
        </div>
      </div>
  );
}

export default BoardRow;
