import React from 'react';
import { Button } from 'semantic-ui-react';

var SpotifySearchListEntry = ({ track, playNow, addToQueue }) => (

  <div className="spotify-track-entry">
    <div className="spotify-top">
      <img src={track.album.images[2].url} />
      <div className="spotify-buttons">
        <Button circular icon='play' onClick={() => playNow('spotify', track)}></Button>
        <Button circular icon='add' onClick={() => addToQueue('spotify', track)}></Button>
      </div>
    </div>
    <div className="spotify-bottom">
      <div>Name: {track.name}</div>
      <div>Artist: {track.artists[0].name}</div>
      <div>Album: {track.album.name}</div>
    </div>
  </div>

);


export default SpotifySearchListEntry;
