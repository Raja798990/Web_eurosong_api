const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
})


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

app.get('/goats', (req, res) => { 
  res.json(goats);
})

app.get('/goats/:id', (req, res) => { 
  console.log(req.params.id);
  let selectedGoat = null;

  goats.forEach((goat) => { 
    if (goat.id == req.params.id) { 
      selectedGoat = goat;
    }
  });

  res.json(selectedGoat);
});

app.delete('/goats/:id', (req, res) => { 
  console.log("Delete the goat with id" + req.params.id);
  res.send("Delete the goat");
})


console.log("...SERVER IS RUNNING...");

app.listen(3000);

