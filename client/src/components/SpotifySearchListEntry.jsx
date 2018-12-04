import React from 'react';

var SpotifySearchListEntry = ({ track, playNow, addToQueue }) => (

  <div className="spotify-track-entry">
    <div>
      <img src={track.album.images[2].url} />
    </div>
    <div>Name: {track.name}</div>
    <div>Artist: {track.artists[0].name}</div>
    <div>Album: {track.album.name}</div>
    <button onClick={() => playNow('spotify', track)}>PLAY NOW</button>
    <button onClick={() => addToQueue('spotify', track)}>ADD TO QUEUE</button>
  </div>

);


export default SpotifySearchListEntry;
