// feedback.router.js

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
  const feedback = req.body;
  const sqlText = `
  INSERT INTO "feedback"
    (feeling, understanding, support, comments)
      VALUES
      ($1, $2, $3, $4)
  `;
  const sqlValues = [
    feedback.feeling,
    feedback.understanding, 
    feedback.support, 
    feedback.comments
  ]
  pool.query(sqlText, sqlValues)
  .then((dbResult) => {
    console.log(`added feedback to the database`, feedback);
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log(`error in making database query ${sqlText}`, error);
  })
})

module.exports = router;

