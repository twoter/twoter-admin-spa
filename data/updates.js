import usersData from './users';

const updatesData = [
  {
    id: 1,
    content: 'update 1',
    tags: [],
    user: {
      id: 1
    },
    createdAt:1529514315
  },
  {
    id: 2,
    content: 'update 2',
    tags: [],
    user: {
      id: 1
    },
    createdAt:1529514315
  },
  {
    id: 3,
    content: 'update 3',
    tags: [],
    user: {
      id: 2
    },
    createdAt:1529514315
  }
];

for (const update of updatesData) {
  update.user = getUserById(update.user.id);
}

function getUserById(id) {
  for (const user of usersData) {
    if (id == user.id) {
      return user;
    }
  }

  return null;
}

export default updatesData;
