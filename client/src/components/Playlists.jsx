import React from 'react';
import { Button } from 'semantic-ui-react';

const Playlists = ({ playlists, changePlaylistView, handleUsePlaylist }) => (

  playlists.length === 0 ? <div id="playlists">loading playlists...</div> :
    <div id="playlists">
      <h2>Saved Playlists:</h2>
      {playlists.map((playlist, index) => {
        return (
          <div key={index} className="playlist-entry">
            <h3>{index + 1}. {playlist.playlists.name}</h3>
            <Button onClick={() => handleUsePlaylist(index)}>use</Button>
          </div>
        )
      })}
      <Button className="back-button" onClick={() => changePlaylistView()}>Back</Button>
    </div>

)

export default Playlists;