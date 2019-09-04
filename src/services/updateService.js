import apiClient from './api-client';

const updateService = {
  getAll,
  getByUser,
  deleteById
};

function getAll() {
  return apiClient.get('admin/api/updates').then(response => response.data);
}

function getByUser(userId) {
  return apiClient
    .get(`admin/api/users/${userId}/updates`)
    .then(response => response.data);
}

function deleteById(id) {
  return apiClient
    .delete(`admin/api/updates/${id}`)
    .then(response => response.data);
}

export default updateService;
