import apiClient from './api-client';

const userService = {
  getAll,
  getById,
  deleteById
};

function getAll() {
  return apiClient.get('admin/api/users')
    .then(response => response.data);
}

function getById(id) {
  return apiClient.get(`admin/api/users/${id}`)
    .then(response => response.data);
}

function deleteById(id) {
  return apiClient.delete(`admin/api/users/${id}`)
    .then(response => response.data);
}

export const filterOutUserById = (users, id) => users.filter(user => user.id != id);

export default userService;
