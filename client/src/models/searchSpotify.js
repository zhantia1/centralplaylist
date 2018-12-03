const axios = require('axios');

const searchSpotify = ({query, max = 5}, callback) => {
  let access_token;
  access_token = window.location.hash.slice(14);
  axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: 'Bearer ' + access_token
    },
    params: {
      q: query,
      limit: max,
      type: 'track',
    }
  })
    .then((response) => {
      callback(response.data.tracks.items)
    })
    .catch((err) => {
      console.log(err);
    })
}


export default searchSpotify;