const db = require('../db');

module.exports = {
  getAll,
  getById,
  deleteById
};

function getAll(req, res) {
  res.json(db.getAdminUsers());
}

function getById(req, res) {
  userId = req.params.userId;
  user = db.getAdminUsers().find(user => user.id == userId);
  res.json(user);
}

function deleteById(req, res) {
  userId = req.params.userId;
  db.deleteAdminUserById(userId);
  res.json(null);
}
