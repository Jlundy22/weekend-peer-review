import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Understanding() {
  const [understanding, setUnderstanding] = useState(0);
  const history = useHistory();


  const handleUnderstanding = () => {
    // dispatch understanding value to the store from here
    history.push('/support')
  }

  return (
    <div>
      <h1>How well are you understanding the material?</h1>
      <label htmlFor="understanding"></label>
      <input
        type="number"
        name="understanding?"
        value={understanding}
        onChange={(event) => setUnderstanding(event.target.value)} />
      <button onClick={handleUnderstanding}
      >Next</button>
    </div >
  )
}

export default Understanding;