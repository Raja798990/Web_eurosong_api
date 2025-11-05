const express = require('express');
const router = express.Router();

// we will use the prisma client to connect with the database
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ------------
// Get all votes
// ------------
router.get('/', async (req, res) => {
  const votes = await prisma.votes.findMany();
  res.json(votes);
});

// ------------
// Post a vote
// ------------
router.post('/', async(req, res) => {

  // prisma function create
  const songId = req.body.song_id;
  const points = req.body.points;

  const newVote = await prisma.votes.create({
    data: {
      song_id: songId,
      points: points
    }
  })

  res.json(newVote);
})

module.exports = router;