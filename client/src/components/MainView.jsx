import React from 'react';
import YoutubeSearchList from './YoutubeSearchList.jsx';
import SpotifySearchList from './SpotifySearchList.jsx';

const MainView = ({ youtubeVideos, spotifyTracks, playNow, addToQueue }) => (

  <div id="MainView">
    <YoutubeSearchList
      youtubeVideos={youtubeVideos}
      playNow={playNow}
      addToQueue={addToQueue}
    />
    <SpotifySearchList 
      spotifyTracks={spotifyTracks}
      playNow={playNow}
      addToQueue={addToQueue}
    />
  </div>

)

export default MainView;