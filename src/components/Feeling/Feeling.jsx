import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Feeling() {

  return <div> <p>How are you feeling today?</p>
    <Link to="/understanding"><button>Next</button></Link></div>
}

export default Feeling;