const express = require("express");
const router = express.Router();

// ----------------
// Post a vote
// ----------------

router.get('/', (req, res) => { 
    // @todo: link to database
  res.send("[POST] a vote");
})

module.exports = router;