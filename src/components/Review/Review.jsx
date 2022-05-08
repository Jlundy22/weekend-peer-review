// Review.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Review() {
  console.log('in Review()');
  const history = useHistory();
  const dispatch = useDispatch();

  let feeling = useSelector((store) => store.feelingReducer);
  let understanding = useSelector((store) => store.understandingReducer);
  let support = useSelector((store) => store.supportReducer);
  let comments = useSelector((store) => store.commentReducer);



  const onReviewSubmit = () => {
    dispatch({
      type: 'SET_FEEDBACK',
      payload: {
        feeling: feeling, 
        understanding,
        support, 
        comments
      }
    }),

    history.push('/thankyou');
  }
  

  return (
      <>
          <h1>Review Your Feedback</h1>
          <h3>Feelings: {feeling}</h3>         
          <h3>Understanding: {understanding}</h3>
          <h3>Support: {support}</h3>
          <h3>Comments: {comments}</h3>


          
          <button onClick={() => onReviewSubmit()}>
                          SUBMIT
                      </button>
          
      </>
  );
}

export default Review;