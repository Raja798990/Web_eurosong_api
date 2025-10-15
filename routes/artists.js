const express = require("express");
const router = express.Router();

// we will use Prisma to connect to the database
const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// ----------------
// Get artist
// ----------------

router.get('/', async(req, res) => { 
 let artists = await prisma.artists.findMany();
  res.json(artists);
})

// ----------------
// POST add artist
// Accept JSON body {name: "dj name" }
// return success 
// ----------------
router.post('/', async(req, res) => { 
  // cehck if artist with a name is already in the database
  // simuilar as select * from artists where name = 'dj name'
  const CheckArtist = await prisma.artists.findMany({
    where: {
      name: req.body.name
    }
  });

  //If multiple artists it means it is already existing and i don't want to create new one 
  if(CheckArtist.length > 0){
    res.json(
      {
        "status": "Artist name already exists"
      }
      
    );
  }else{
    const newArtist = await prisma.artists.create({
      data: {
        name: req.body.name
    }
  });

  res.send("[Post] add new artist");
  
}
})

// ----------------
// Delete artist
// ----------------
router.delete('/:id', (req, res) => { 
    // @todo: link to database
  res.send("[DELETE] add new artists");
})

// ----------------
// Update artist
// ----------------
router.put('/:id', (req, res) => { 
    // @todo: link to database
  res.send("[PUT] add new artists");
})

module.exports = router;