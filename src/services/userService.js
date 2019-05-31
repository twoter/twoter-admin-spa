import usersData from '../../data/users';

const userService = {
  getAll
};

function getAll() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersData);
    }, 1000);
  });
}

export default userService;
