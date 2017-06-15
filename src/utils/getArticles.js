import axios from 'axios';

const articlesUrl = 'https://newsapi.org/v1/articles';
const getArticles = (source) => {
  const params = {
    params: {
      source: source,
      apiKey: 'a0dfb26d91ba4ed9ae971dfaa1493b6d',
      language: 'en'
    }
  }
  return axios.get(articlesUrl, params).then(function(response) {
    return response;
  }).catch(function(error) {
    console.error(error);
  });
};

export default getArticles;
