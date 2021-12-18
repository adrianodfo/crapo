import './Discard.css';
import {Card} from './Card';

function Discard(props) {

  var isEmpty = !props.Index;

  if( isEmpty )
  {
     return (<div className="Discard"></div>)
  }
     
  return (<Card {...props} />);
}

export default Discard;
