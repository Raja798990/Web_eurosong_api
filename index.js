const express = require("express");
const app = express();

// all the routes

const goatsRouter = require('./routes/goats');
app.use('/goats',goatsRouter);

console.log("...SERVER IS RUNNING...");

app.listen(3000);

