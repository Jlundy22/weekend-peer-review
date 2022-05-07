import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Comments() {


  return <div>
    <p>
    Any comments you want to leave?    </p>
    <form 
    // onSubmit={handleSubmit}
    >
<input type="text" placeholder="Comments?"
  onChange={(event) => setName(event.target.value)}
  value={name} />
  </form>
    <Link to="/thankyou"><button>Next</button></Link>
  </div>
}

export default Comments;