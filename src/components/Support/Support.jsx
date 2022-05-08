// Support.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Support() {
  console.log('in Support()');
  const [support, setSupport] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();



  const handleSupport = () => {
    if (support === ''){
      alert('please complete the form to advance to the next page')
      return false;
    }
    else if (support <1 || support > 10){
      alert('please enter a number between 1 and 10')
      return false;
    }

    // dispatch support value to the store from here
    history.push('/comments');
    dispatch({
      type: 'SET_SUPPORT',
      payload: support        
  });
  }

  return (
    <div>
      <h1>How well do you feel supported today?</h1>
      <h5>(on a scale of 1-10)</h5>
      <label htmlFor="support"></label>
      <input
        type="number"
        name="support?"
        value={support}
        onChange={(event) => setSupport(event.target.value)} />
      <button onClick={handleSupport}
      >Next</button>
    </div >
  )
}

export default Support;