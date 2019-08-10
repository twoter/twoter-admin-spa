const db = require('../db');

module.exports = {
  getAll,
  getByUser,
  deleteById
}

function getAll(req, res) {
  res.json(db.getUpdates());
}

function getByUser(req, res) {
  userId = req.params.userId;
  updates = db.getUpdates().filter(update => update.user.id == userId);
  res.json(updates);
}

function deleteById(req, res) {
  updateId = req.params.updateId;
  db.deleteUpdateById(updateId);
  res.json(null);
}
