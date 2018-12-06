import React from 'react';
import YoutubeSearchList from './YoutubeSearchList';
import SpotifySearchList from './SpotifySearchList';
import Playlists from './Playlists';

const MainView = ({ youtubeVideos, spotifyTracks, playNow, addToQueue, playlists, viewPlaylist, changePlaylistView, handleUsePlaylist }) => (

  viewPlaylist ? <div id="MainView"><Playlists playlists={playlists} changePlaylistView={changePlaylistView} handleUsePlaylist={handleUsePlaylist}/></div> :
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