import axios from 'axios';

const sourcesUrl = 'https://newsapi.org/v1/sources';
const getSources = () => {
  return axios.get(sourcesUrl).then(function(response) {
    return response;
  }).catch(function(error) {
    console.error(error);
  });
};

export default getSources;
