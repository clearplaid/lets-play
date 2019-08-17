const db = require("../models");

// Defining methods for the profilesController
module.exports = {
  findAll: function(req, res) {
    db.Profile
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    console.log("find one");
    console.log(req.body);
    db.Profile
    .findOne(req.body.Profilename)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));    
},

  findById: function(req, res) {
    db.Profile
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("create");
    console.log(req.body);
    db.Profile
      .create(req.body) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Profile
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Profile
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};