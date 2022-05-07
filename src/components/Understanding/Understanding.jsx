import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Understanding() {

  return <div>
    <p>How well are you understanding the content?</p>
    
    <Link to="/support"><button>Next</button></Link></div>
}

export default Understanding;