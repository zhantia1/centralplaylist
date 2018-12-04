import React from 'react';
import YoutubeSearchList from './YoutubeSearchList.jsx';
import SpotifySearchList from './SpotifySearchList.jsx';

const MainView = ({ youtubeVideos, spotifyTracks, playNow, addToQueue }) => (

  <div id="MainView">
    <h3>Youtube Searches:</h3>
    <YoutubeSearchList
      youtubeVideos={youtubeVideos}
      playNow={playNow}
      addToQueue={addToQueue}
    />
    <h3>Spotify Searches:</h3>
    <SpotifySearchList 
      spotifyTracks={spotifyTracks}
      playNow={playNow}
      addToQueue={addToQueue}
    />
  </div>

)

export default MainView;