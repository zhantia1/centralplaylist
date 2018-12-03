import React from 'react';

var SpotifySearchListEntry = ({ track }) => (

  <div className="spotify-track-entry">
    <div>
      <img src={track.album.images[2].url} />
    </div>
    <div>Name: {track.name}</div>
    <div>Artist: {track.artists[0].name}</div>
    <div>Album: {track.album.name}</div>
    <button>PLAY NOW</button>
    <button>ADD TO QUEUE</button>
  </div>

);


export default SpotifySearchListEntry;
