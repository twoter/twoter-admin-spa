const express = require('express');
const { getAll, getById, deleteById } = require('./controllers/users.controller');
const updatesController = require('./controllers/updates.controller');
const commentsController = require('./controllers/comments.controller');
const adminUsersController = require('./controllers/admin-users.controller');

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

// admin user endpoints
app.get('/admin/api/admin-users', adminUsersController.getAll);
app.get('/admin/api/admin-users/:userId', getById);
app.delete('/admin/api/admin-users/:userId', deleteById);

// user endpoints
app.get('/admin/api/users', getAll);
app.get('/admin/api/users/:userId', getById);
app.delete('/admin/api/users/:userId', deleteById);

// update endpoints
app.get('/admin/api/updates', updatesController.getAll);
app.get('/admin/api/users/:userId/updates', updatesController.getByUser);
app.delete('/admin/api/updates/:updateId', updatesController.deleteById);

// comment endpoints
app.get('/admin/api/updates/:updateId/comments', commentsController.getByUpdate);
app.delete('/admin/api/comments/:commentId', commentsController.deleteById);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
