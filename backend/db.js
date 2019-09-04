const users = require('./data/users');
const updates = require('./data/updates');
const comments = require('./data/comments');
const adminUsers = require('./data/admin-users');

const COMMENTS_PER_PAGE = 7;

module.exports = {
  getUsers,
  getUpdates,
  getAdminUsers,
  deleteUserById,
  deleteUpdateById,
  deleteAdminUserById,
  getCommentsByUpdateId,
};

function getUsers() {
  return users;
}

function getUpdates() {
  return updates;
}

function getCommentsForUpdate(updateId) {
  return comments.filter(comment => comment.updateId == updateId);
}

function getCommentsByUpdateId(updateId, page = 1) {
  if (page < 1) {
    page = 1;
  }
  const updateComments = getCommentsForUpdate(updateId);
  const comments = [];

  for (let c = 0, i = (page - 1) * COMMENTS_PER_PAGE; c < COMMENTS_PER_PAGE; c++, i++) {
    if (updateComments[i]) {
      comments.push(updateComments[i]);
    }
  }

  return comments;
}

function getAdminUsers() {
  return adminUsers;
}

function deleteAdminUserById(id) {
  for (let i = 0; i < adminUsers.length; i++) {
    const user = adminUsers[i];
    if (id == user.id) {
      adminUsers.splice(i, 1);

      break;
    }
  }
}

function deleteUserById(id) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (id == user.id) {
      users.splice(i, 1);
      deleteUpdatesForUser(id);
  
      break;
    }
  }
}

function deleteUpdateById(id) {
  for (let i = 0; i < updates.length; i++) {
    const update = updates[i];
    if (id == update.id) {
      updates.splice(i, 1);

      break;
    }
  }
}

function deleteUpdatesForUser(userId) {
  for (let i = 0; i < updates.length; ) {
    if (updates[i].user && userId == updates[i].user.id) {
      updates.splice(i, 1);
    } else {
      i++;
    }
  }
}
