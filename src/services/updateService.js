import axios from 'axios';

const updateService = {
  getAll,
  getByUser,
  deleteById
};

function getAll() {
  return axios.get('http://localhost:3001/admin/api/updates')
    .then(response => response.data);
}

function getByUser(userId) {
  return axios.get(`http://localhost:3001/admin/api/users/${userId}/updates`)
    .then(response => response.data);
}

function deleteById(id) {
  return axios.delete(`http://localhost:3001/admin/api/updates/${id}`)
    .then(response => response.data);
}

export default updateService;
