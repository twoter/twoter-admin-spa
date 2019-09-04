const express = require('express');
const usersController = require('./controllers/users.controller');
const updatesController = require('./controllers/updates.controller');
const commentsController = require('./controllers/comments.controller');
const adminUsersController = require('./controllers/admin-users.controller');
const authController = require('./controllers/auth.controller');
const sessionStore = require('./session-store');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, X-AUTH-TOKEN'
  );

  if (
    'OPTIONS' !== req.method.toLocaleUpperCase() &&
    '/admin/api/login' !== req.path &&
    !sessionStore.exists(req.get('X-AUTH-TOKEN'))
  ) {
    res.status(401);
    res.end();
  } else {
    next();
  }
});

// authentication endpoints
app.post('/admin/api/login', authController.login);
app.delete('/admin/api/logout', authController.logout);

// admin user endpoints
app.get('/admin/api/admin-users', adminUsersController.getAll);
app.get('/admin/api/admin-users/:userId', adminUsersController.getById);
app.delete('/admin/api/admin-users/:userId', adminUsersController.deleteById);

// user endpoints
app.get('/admin/api/users', usersController.getAll);
app.get('/admin/api/users/:userId', usersController.getById);
app.delete('/admin/api/users/:userId', usersController.deleteById);

// update endpoints
app.get('/admin/api/updates', updatesController.getAll);
app.get('/admin/api/users/:userId/updates', updatesController.getByUser);
app.delete('/admin/api/updates/:updateId', updatesController.deleteById);

// comment endpoints
app.get(
  '/admin/api/updates/:updateId/comments',
  commentsController.getByUpdate
);
app.delete('/admin/api/comments/:commentId', commentsController.deleteById);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
