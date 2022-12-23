import {create} from 'apisauce';

const user = (baseURL = 'https://jsonplaceholder.typicode.com/') => {
  const api = create({
    baseURL,
    timeout: 10000,
  });

  const getUserData = () => api.get('users/');
  return {
    getUserData,
  };
};

export default {
  user,
};
