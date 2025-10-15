const express = require("express");
const router = express.Router();

// we will use Prisma to connect to the database
const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// ----------------
// Get song
// ----------------

router.get('/', async (req, res) => { 
  const songs = await prisma.songs.findMany({
    include: { 
      artists: true 
    }
  });
  res.json(songs);
})

// ----------------
// Add song
// ----------------
router.post('/', async (req, res) => { 
  let artistId = req.body.artist_id;
  let songName = req.body.name;

  const newSong = await prisma.songs.create({
        data: {
          name: songName,
          artist_id: artist_id
        }
    });
  console.log(artistId);
  console.log(songName);

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