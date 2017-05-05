const models = require("../model");

module.exports = {
  list: (req, res) => {
    models.category
      .getAll()
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json({ err }));
  },
  get: (req, res) => {
    models.category
      .getById(req.params.id)
      .then(category => res.json(category))
      .catch(err => res.status(500).json({ err }));
  },
  create: (req, res) => {
    res.json(req.body);
  }
};
