import axios from 'axios'

const userService = {
  login,
  getAll,
  getById,
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
  return axios.get('http://localhost:3001/admin/api/users')
    .then(response => response.data);
}

function getById(id) {
  return axios.get(`http://localhost:3001/admin/api/users/${id}`)
    .then(response => response.data);
}

function deleteById(id) {
  return axios.delete(`http://localhost:3001/admin/api/users/${id}`)
    .then(response => response.data);
}

export const filterOutUserById = (users, id) => users.filter(user => user.id != id);

export default userService;
