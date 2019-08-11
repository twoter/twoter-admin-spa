import axios from 'axios';

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
  return axios.get('http://localhost:3001/admin/api/admin-users')
    .then(response => response.data);
}

function getById(id) {
  return axios.get(`http://localhost:3001/admin/api/admin-users/${id}`)
    .then(response => response.data);
}

function deleteById(id) {
  return axios.delete(`http://localhost:3001/admin/api/admin-users/${id}`)
    .then(response => response.data);
}

export default adminUserService;
