import {create} from 'apisauce';

const game = (baseURL = 'https://www.freetogame.com') => {
  const api = create({
    baseURL,
    timeout: 1000,
  });

  const getAllGameData = () => api.get('api/games');
  return {
    getAllGameData,
  };
};

export default {
  game,
};
