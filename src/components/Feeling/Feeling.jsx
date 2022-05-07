import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Feeling() {
  const [feeling, setFeeling] = useState(0);
  const history = useHistory();

  
  const handleFeelings = () => {
    // dispatch feelings value to the store from here
    history.push('/understanding')
  } 

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <label htmlFor="feeling"></label>
      <input
        type="number"
        name="feeling?"
        value={feeling}
        onChange={(event) => setFeeling(event.target.value)} />
      <button onClick={handleFeelings}
      >Next</button>
    </div >
  )
}

export default Feeling;