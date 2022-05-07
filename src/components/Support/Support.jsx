import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Support() {

  return <div> <p>
    Support from coders like YOU.
    (thank you)
  </p>
  
  <Link to="/comments"><button>Next</button></Link></div>
}

export default Support;