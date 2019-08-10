const db = require('../db');

module.exports = {
  getAll,
  getById,
  deleteById
}

function getAll(req, res) {
  res.json(db.getUsers());
}

function getById(req, res) {
  userId = req.params.userId;
  user = db.getUsers().find(user => user.id == userId);
  res.json(user);
}

function deleteById(req, res) {
  userId = req.params.userId;
  db.deleteUserById(userId);
  res.json(null);
}
