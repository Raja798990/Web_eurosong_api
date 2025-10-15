const express = require("express");
const app = express();

// make sure we can read JSON in the body of requests
app.use(express.json()); 


// all the routes
const artistsRouter = require('./routes/artists');
const goatsRouter = require('./routes/goats');
const rankingRouter = require('./routes/ranking');
const songsRouter = require('./routes/songs');
const votingRouter = require('./routes/voting');

app.use('/artists',artistsRouter);
app.use('/goats',goatsRouter);
app.use('/ranking',rankingRouter);
app.use('/songs',songsRouter);
app.use('/voting',votingRouter);

console.log("...SERVER IS RUNNING...");

app.listen(3000);

