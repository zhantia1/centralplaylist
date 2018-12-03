import React from 'react';
import SpotifySearchListEntry from './SpotifySearchListEntry.jsx';

var SpotifySearchList = ({ spotifyTracks }) => (
  !spotifyTracks ? <div className="spotify-searches">Please wait</div> :
    <div className="youtube-searches">
      {spotifyTracks.map((track) =>
        <SpotifySearchListEntry
          key={track.id}
          track={track}
        />
      )}
    </div>
);


export default SpotifySearchList;
