import React from 'react';
import SpotifySearchListEntry from './SpotifySearchListEntry';

var SpotifySearchList = ({ spotifyTracks, playNow, addToQueue }) => (
  !spotifyTracks ? <div className="spotify-searches">Please press Spotify button...</div> :
    <div className="spotify-searches">
      <h3>Spotify Searches:</h3>
      {spotifyTracks.map((track) =>
        <SpotifySearchListEntry
          key={track.id}
          track={track}
          playNow={playNow}
          addToQueue={addToQueue}
        />
      )}
    </div>
);


export default SpotifySearchList;
