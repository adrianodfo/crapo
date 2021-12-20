import './Stack.css';
import {Card} from './Card';

function Stack(props) {
  var isEmpty = !props.Index;
  var card = "";
  if( !isEmpty )
  {
      card = <Card {...props} />;
  }
  return (<div className="Stack">{card}</div>)
}

export default Stack;
