import axios from 'axios';

export const request = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('finally');
    });
};
