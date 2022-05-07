import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Support() {
  const [support, setSupport] = useState(0);
  const history = useHistory();


  const handleSupport = () => {
    // dispatch support value to the store from here
    history.push('/comments')
  }

  return (
    <div>
      <h1>How well do you feel supported today?</h1>
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