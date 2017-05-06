const models = require("../model");

module.exports = {
  list: (req, res) => {
    models.categories
      .getAll()
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json({ err }));
  },
  get: (req, res) => {
    models.categories
      .getById(req.params.id)
      .then(category => res.json(category))
      .catch(err => res.status(500).json({ err }));
  },
  create: (req, res) => {
    model.categories
      .create(req.body)
      .then(category => res.json(category))
      .catch(err => res.status(500).json({ err }));
  }

};
