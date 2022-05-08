// ThankYou.jsx 
// ~~ SUBMISSION SUCCESS PAGE

import {useHistory} from 'react-router-dom';

function ThankYou() {
  const history = useHistory();

  return (<div>
    <h1>
      Thank you!
    </h1>
    <button onClick={() => history.push('/')}>
      Leave New Feedback
    </button>
  </div>)
}

export default ThankYou;