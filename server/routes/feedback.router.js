// feedback.router.js

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
  const feedbackSurvey = req.body;
  console.log(`adding new feedbackSurvey`, feedbackSurvey);

  let sqlText = `
  INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
      VALUES
      ($1, $2, $3, $4)
  `;
  let sqlValues = [
    feedbackSurvey.feeling,
    feedbackSurvey.understanding, 
    feedbackSurvey.support, 
    feedbackSurvey.comments
  ]
  pool.query(sqlText, sqlValues)
  .then(result => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`error in making feedbackSurvey database query ${sqlText}`, error);
  });
});

module.exports = router;

