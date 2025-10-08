const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/goats', (req, res) => {
  const goats = [
    {
      "id":1,
      "name":"t-rex"
    },
    {
      "id":2,
      "name":"connie"
    },
    {
      "id":3,
      "name":"clyde"
    },
  ]
  res.json(goats);
})

console.log("...SERVER IS RUNNING...");

app.listen(3000);

