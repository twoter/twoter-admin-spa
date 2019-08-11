import apiClient from '../services/api-client';

const adminUserService = {
  login,
  getAll,
  getById,
  deleteById
};

function login(username, password) {
  return apiClient.post('admin/api/login', { username, password })
    .then(response => response.data);
}

function getAll() {
  return apiClient.get('admin/api/admin-users')
    .then(response => response.data);
}

function getById(id) {
  return apiClient.get(`admin/api/admin-users/${id}`)
    .then(response => response.data);
}

function deleteById(id) {
  return apiClient.delete(`admin/api/admin-users/${id}`)
    .then(response => response.data);
}

export default adminUserService;
