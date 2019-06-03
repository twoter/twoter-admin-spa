import adminUsersData from '../../data/admin-users';

const adminUserService = {
  login,
  getAll,
  getById,
  deleteById
};

function login(username, password) {
  let logged = false;
  for (const user of adminUsersData) {
    if (username === user.username && password === user.password) {
      logged = true;

      break;
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ logged });
    }, 1000);
  });
}

function getAll() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(adminUsersData);
    }, 1000);
  });
}

function getById(id) {
  let foundUser = null;
  for (const user of adminUsersData) {
    if (id == user.id) {
      foundUser = user;

      break;
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(foundUser);
    }, 1000);
  });
}

function deleteById(id) {
  for (let i = 0; i < adminUsersData.length; i++) {
    const user = adminUsersData[i];
    if (id == user.id) {
      adminUsersData.splice(i, 1);

      break;
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default adminUserService;
