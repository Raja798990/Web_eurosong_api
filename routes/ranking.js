const express = require("express");
const router = express.Router();

// ----------------
// Get ranking
// ----------------

router.get('/', (req, res) => { 
    // @todo: link to database
  res.send("[GET]show the ranking");
})

module.exports = router;