// Understanding.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
  console.log('in Understanding()');
  const [understanding, setUnderstanding] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();



  const handleUnderstanding = () => {
    if (understanding === ''){
      alert('please complete the form to advance to the next page')
      return false;
    }
    else if (understanding <1 || understanding > 10){
      alert('please enter a number between 1 and 10')
      return false;
    }

    // dispatch understanding value to the store from here
    history.push('/support');
    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: understanding        
  });
  }
  

  return (
    <div>
      <h1>How well are you understanding the material?</h1>
      <h5>(on a scale of 1-10)</h5>
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