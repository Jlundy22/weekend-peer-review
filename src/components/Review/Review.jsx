// Review.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';


function Review() {
  console.log('in Review()');
  const history = useHistory();
  // const dispatch = useDispatch();

  const onReviewSubmit = () => {
    history.push('/thankyou');


  }
  

  return (
      <>
          <h1>Review Your Feedback</h1>
          <h3>Feelings: </h3>
          <h3>Understanding: </h3>
          <h3>Support: </h3>
          <h3>Comments: </h3>


          
          <button onClick={() => onReviewSubmit()}>
                          SUBMIT
                      </button>
          
      </>
  );
}

export default Review;