import commentsData from '../../data/comments';
import { COMMENTS_PER_PAGE } from '../constants/common';

const commentService = {
  load,
  deleteById
};

function load(updateId, page) {
  const updateComments = getCommentsForUpdate(updateId);
  const comments = [];

  for (let c = 0, i = (page - 1) * COMMENTS_PER_PAGE; c < COMMENTS_PER_PAGE; c++, i++) {
    if (updateComments[i]) {
      comments.push(updateComments[i]);
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

function getCommentsForUpdate(updateId) {
  const comments = [];
  for (const comment of commentsData) {
    if (updateId == comment.updateId) {
      comments.push(comment);
    }
  }

  return comments;
}

function deleteById(id) {
  for (let i = 0; i < commentsData.length; i++) {
    const comment = commentsData[i];
    if (id == comment.id) {
      commentsData.splice(i, 1);

      break;
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default commentService;
