import axios from "axios";

const beersData = () => {
  return axios.get(`https://api.punkapi.com/v2/beers`);
};

const api = {
  beersData,
};

export default api;
