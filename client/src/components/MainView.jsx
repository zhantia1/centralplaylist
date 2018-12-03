import React from 'react';
import YoutubeSearchList from './YoutubeSearchList.jsx';
import SpotifySearchList from './SpotifySearchList.jsx';

const MainView = ({ youtubeVideos, spotifyTracks }) => (

  <div id="MainView">
    <h3>Youtube Searches:</h3>
    <YoutubeSearchList youtubeVideos={youtubeVideos}/>
    <h3>Spotify Searches:</h3>
    <SpotifySearchList spotifyTracks={spotifyTracks}/>
  </div>

)

export default MainView;