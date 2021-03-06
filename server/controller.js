module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  addHouse: (req, res) => {
    let { name, address, city, state, zipcode } = req.body;
    const db = req.app.get("db");
    db.new_house({ name, address, city, state, zipcode })
      .then(houses => {
        console.log(houses);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  deleteHouse: (req, res) => {
      let {id} = req.params;
      const db = req.app.get("db");
      db.delete_house({id})
      .then(houses => {console.log(houses)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
