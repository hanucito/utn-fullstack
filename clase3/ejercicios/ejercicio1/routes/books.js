const model = require("../model");

module.exports = {
  list: (req, res) => {
    model.books
      .getAll()
      .then(books => res.json(books))
      .catch(err => res.status(500).json({ err }));
  },
  get: (req, res) => {
    model.books
      .getById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(500).json({ err }));
  },
  create: (req, res) => {
    model.books
      .create(req.body)
      .then(book => res.json(book))
      .catch(err => res.status(500).json({ err }));
  }
};
