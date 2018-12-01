const axios = require('axios');
const key = require('../apiKey')

const searchYoutube = ({query, max = 10}, callback) => {
  axios.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
}


export default searchYoutube;