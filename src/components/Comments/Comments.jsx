// Comments.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';


function Comments() {
  console.log('in Comments()');
  const [comments, setComments] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();



  const handleComments = () => {
    // dispatch comments value to the store from here
    history.push('/review');
    dispatch({
      type: 'SET_COMMENTS',
      payload: comments        
  });
  }

  return (
    <div>
      <h1>Do you have any comments?</h1>
      <label htmlFor="comments"></label>
      <input
        type="text"
        name="comments?"
        value={comments}
        onChange={(event) => setComments(event.target.value)} />
      <button onClick={handleComments}
      >Next</button>
    </div >
  )
}

export default Comments;