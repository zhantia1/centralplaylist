const axios = require('axios');
const apikey = require('../../youtubeAPI');

const searchYoutube = ({query, max = 5}, callback) => {
  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      key: apikey,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: 'true'
    }
  })
    .then((response) => {
      console.log(response);
      callback(response.data.items)
    })
    .catch((err) => {
      console.log(err);
    })
}

export default searchYoutube;