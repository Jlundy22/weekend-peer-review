import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Comments() {
  const [comments, setComments] = useState(0);
  const history = useHistory();


  const handleComments = () => {
    // dispatch comments value to the store from here
    history.push('/review')
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