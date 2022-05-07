import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Support() {

  return <div> <p>
    How well are you being supported?
  </p>
  <form 
    // onSubmit={handleSubmit}
    >
<input type="number" placeholder="Support?"
  onChange={(event) => setName(event.target.value)}
  value={name} />
  </form>
  
  <Link to="/comments"><button>Next</button></Link></div>
}

export default Support;