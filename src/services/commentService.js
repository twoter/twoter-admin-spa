import axios from 'axios';

const commentService = {
  load,
  deleteById
};

function load(updateId, page) {
  return axios.get(`http://localhost:3001/admin/api/updates/${updateId}/comments`, { params: { page } })
    .then(response => response.data);
}

function deleteById(id) {
  return axios.delete(`http://localhost:3001/admin/api/commentd/${id}`)
    .then(response => response.data);
}

export default commentService;
