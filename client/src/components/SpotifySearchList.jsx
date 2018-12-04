import React from 'react';
import SpotifySearchListEntry from './SpotifySearchListEntry.jsx';

var SpotifySearchList = ({ spotifyTracks, playNow, addToQueue }) => (
  !spotifyTracks ? <div className="spotify-searches">Please wait</div> :
    <div className="youtube-searches">
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
