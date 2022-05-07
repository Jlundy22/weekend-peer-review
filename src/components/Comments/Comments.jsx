import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Comments() {


  return <div>
    <p>
    Any comments you want to leave?    </p>
    <Link to="/thankyou"><button>Next</button></Link>
  </div>
}

export default Comments;