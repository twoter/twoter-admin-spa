import apiClient from './api-client';

const commentService = {
  load,
  deleteById
};

function load(updateId, page) {
  return apiClient
    .get(`admin/api/updates/${updateId}/comments`, { params: { page } })
    .then(response => response.data);
}

function deleteById(id) {
  return apiClient
    .delete(`admin/api/commentd/${id}`)
    .then(response => response.data);
}

export default commentService;
