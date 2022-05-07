import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Understanding() {

  return <div>
    <p>How well are you understanding the content?</p>
    <form
    // onSubmit={handleSubmit}
    >
      <input type="number" placeholder="Understanding?"
        onChange={(event) => setName(event.target.value)}
        value={name} />
    </form>

    <Link to="/support"><button>Next</button></Link></div>
}

export default Understanding;