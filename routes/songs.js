const express = require("express");
const router = express.Router();

// ----------------
// Get song
// ----------------

router.get('/', (req, res) => { 
    // @todo: link to database
  res.send("[GET]all the songs");
})

// ----------------
// Add song
// ----------------
router.post('/', (req, res) => { 
    // @todo: link to database
  res.send("[POST] add new song");
})

// ----------------
// Delete song
// ----------------
router.delete('/:id', (req, res) => { 
    // @todo: link to database
  res.send("[DELETE] add a song");
})

module.exports = router;