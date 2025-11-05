const express = require('express');
const router = express.Router();

// we will use the prisma client to connect with the database
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ------------
// Get ranking
// ------------
router.get('/', async(req, res) => {
  const ranking = await prisma.$queryRaw`
    SELECT 
      s.song_id, s.name AS songname, a.name AS artistname, SUM(Points) AS totalpoint
    FROM 
      votes AS V
        INNER JOIN songs AS s USING(song_id)
        INNER JOIN artists AS a USING(artist_id)
    GROUP BY
      s.song_id
    ORDER BY
      SUM(Points) DESC;
  `

  res.json(ranking);
})

module.exports = router;