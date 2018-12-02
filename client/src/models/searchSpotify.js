const axios = require('axios');
const apikey = require('../../spotifyAPI');
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '67f8f02307f74dafa4d23af41f134d6c',
  clientSecret: '4f8a4afe481743a79301ce3840b2453c',
  redirectUri: 'http://localhost:3000/callback/'
});

// const searchSpotify = ({query, max = 5}, callback) => {
//   axios.get('https://api.spotify.com/v1/search', {
//     Authorization: apikey,
//     params: {
//       q: query,
//       limit: max,
//       type: 'track',
//     }
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// }

const searchSpotify = () => {
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function(data) {
      console.log('Artist albums', data.body);
    },
    function(err) {
      console.error(err);
    }
  );
}

export default searchSpotify;