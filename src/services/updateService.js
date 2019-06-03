import updatesData from '../../data/updates';

const updateService = {
  getAll,
  getByUser,
  deleteById
};

function getAll() {
  return Promise.resolve(updatesData)
    .then((updates) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(updates);
        }, 1000);
      });
    });
}

function getByUser(id) {
  const updates = [];
  for (const update of updatesData) {
    if (update.user && id == update.user.id) {
      updates.push(update);
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updates);
    }, 1000);
  });
}

function deleteById(id) {
  for (let i = 0; i < updatesData.length; i++) {
    const update = updatesData[i];
    if (id == update.id) {
      updatesData.splice(i, 1);

      break;
    }
  }
 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default updateService;
