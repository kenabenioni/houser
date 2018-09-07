require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  ctrl = require("./controller.js"),
  massive = require("massive");

  const app = express();
  const PORT = 3003;

  app.use(bodyParser.json());

massive(process.env.MY_URL).then(db => {
    app.set('db', db);
    app.listen(PORT, () => console.log(`${PORT} is the port.`));
  })
  .catch(err => console.log(err));


  app.get('/api/houses', ctrl.getHouses)
  app.post('/api/newhouse', ctrl.addHouse)
  app.delete('/api/delete/:id', ctrl.deleteHouse)
  
  