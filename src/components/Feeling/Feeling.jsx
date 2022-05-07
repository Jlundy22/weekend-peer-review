import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Feeling() {

  return <div> <p>How are you feeling today?</p>
    <form 
    // onSubmit={handleSubmit}
    >
<input type="number" placeholder="Feeling?"
  onChange={(event) => setName(event.target.value)}
  value={name} />
  </form>
    <Link to="/understanding"><button>Next</button></Link></div>
}

export default Feeling;