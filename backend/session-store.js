module.exports = {
  exists,
  loginUser,
  logoutUser
};

const sessionStore = {};

function loginUser(sessionData) {
  const token = generateToken();
  sessionStore[token] = { id: sessionData.id, username: sessionData.username };

  return token;
}

function logoutUser(token) {
  delete sessionStore[token];
}

function exists(token) {
  return Boolean(sessionStore[token]);
}

function generateToken() {
  let result = '';
  const length = 50;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
