import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Comments() {


  return <div>
    <p>
      Comments from the peanut gallery
    </p>
    <Link to="/thankyou"><button>Next</button></Link>
  </div>
}

export default Comments;