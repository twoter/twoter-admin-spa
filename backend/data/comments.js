const users = require('./users');
const updates = require('./updates');

const commentsData = [
  {
     "id":1,
     "content":"c1",
     "updateId":2,
     "userId":1,
     "user":{
        "id":1,
        "firstName":"Velizar",
        "lastName":"Ivanov",
        "username":"zivanof",
        "password":null,
        "followers":0,
        "following":0,
        "updates":0,
        "createdAt":1529514315,
        "image":null,
        "followed":false
     },
     "imageId":-1,
     "likes":0,
     "createdAt":1559652100,
     "liked":false
  },
  {
     "id":2,
     "content":"c2",
     "updateId":2,
     "userId":1,
     "user":{
        "id":1,
        "firstName":"Velizar",
        "lastName":"Ivanov",
        "username":"zivanof",
        "password":null,
        "followers":0,
        "following":0,
        "updates":0,
        "createdAt":1529514315,
        "image":null,
        "followed":false
     },
     "imageId":-1,
     "likes":0,
     "createdAt":1559652100,
     "liked":false
  }
];

generateComments(1, 15).forEach(comment => {
  commentsData.push(comment);
});

function generateComments(updatedId, count = 1) {
  const update = getUpdate(updatedId);

  if (!update) {
    return;
  }

  const user = getUser(update.user.id);

  if (!user) {
    return;
  }

  const result = [];
  for (let i = 0; i < count; i++) {
    const x = {
      "id":i + 100,
      "content":`...comment ${i + 1}`,
      "updateId":updatedId,
      "userId":user.id,
      "user":user,
      "imageId":-1,
      "likes":0,
      "createdAt":1559652100 + i,
      "liked":false
    };

    result.push(x);
  }

  return result;
}

function getUpdate(updateId) {
  console.log('updates:', updates)
  const found = updates.filter((update) => update.id == updateId);

  return found.length > 0 ? found[0] : null;
}

function getUser(userId) {
  const found = users.filter((user) => user.id == userId);

  return found.length > 0 ? found[0] : null;
}

module.exports = commentsData;
