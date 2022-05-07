import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Support() {

  return <div> <p>
    How well are you being supported?
    (thank you)
  </p>
  
  <Link to="/comments"><button>Next</button></Link></div>
}

export default Support;