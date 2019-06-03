import usersData from '../../data/users';
import updatesData from '../../data/updates';

const userService = {
  login,
  getAll,
  deleteById
};

function login(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function getAll() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersData);
    }, 1000);
  });
}

function deleteById(id) {
  for (let i = 0; i < usersData.length; i++) {
    const user = usersData[i];
    if (id == user.id) {
      usersData.splice(i, 1);
      deleteUpdatesForUser(id);

      break;
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function deleteUpdatesForUser(userId) {
  for (let i = 0; i < updatesData.length; ) {
    if (updatesData[i].user && userId == updatesData[i].user.id) {
      updatesData.splice(i, 1);
    } else {
      i++;
    }
  }
}

export default userService;
