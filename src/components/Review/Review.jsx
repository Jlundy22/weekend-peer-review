import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function Review() {

  const handleReview = () => {

    // using this to 
    //advance to the next page 
    //feels a little hack

    
    history.push('/thankyou')
  }

  return (
    <>
      <h1>This page shows a review of your feedback</h1>
      <button onClick={handleReview}>Finished?</button>

    </>)
}

export default Review;