const db = require('../db');

module.exports = {
  getByUpdate,
  deleteById
}

function getByUpdate(req, res) {
  updateId = req.params.updateId;
  console.log('..comments..')
  console.log(updateId)
  console.log(req.query)
  console.log(req.query.page)
  page = Number(req.query.page)
  comments = db.getCommentsByUpdateId(updateId, page);
  res.json(comments);
}

function deleteById(req, res) {
  commentId = req.params.commentId;
  db.deleteCommentById(commentId);
  res.json(null);
}
