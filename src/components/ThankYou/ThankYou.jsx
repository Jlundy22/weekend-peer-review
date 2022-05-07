import { HashRouter as Router, Route, Link } from 'react-router-dom';

// SUBMISSION SUCCESS PAGE


function ThankYou() {


  return <div>
    <p>
      Thank you!
    </p>
    <Link to="/"><button>Start Over?!</button></Link>

  </div>
}

export default ThankYou;