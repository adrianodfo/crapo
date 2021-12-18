import './Crapo.css';
import {Card, Suits} from './Card';

function Crapo() {
  return (
    <div className="Crapo">
      <Card Index="A" Suit={Suits.Club} />
    </div>
  );
}

export default Crapo;
