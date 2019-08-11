const db = require('../db');
const sessionStore = require('../session-store');

module.exports = {
  login,
  logout
}

function login(req, res) {
  const { username, password } = req.body;
  const found = matchCredentials(username, password);

  if (found) {
    logged = true;
    const token = sessionStore.loginUser(found);
    res.json({ logged: true, token });
  } else {
    res.json({ logged: false });
  }
}

function logout(req, res) {
  const token = req.get('X-AUTH-TOKEN');
  sessionStore.logoutUser(token);
}

function matchCredentials(username, password) {
  const result = db.getAdminUsers().filter(user => user.username === username && user.password === password);

  if (0 < result.length) {
    return {
      id: result[0].id,
      username: result[0].username
    }
  }

  return null;
}
