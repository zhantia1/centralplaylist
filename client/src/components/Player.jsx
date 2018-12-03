import React from 'react';

const Player = ({ currSong, }) => (
  !currSong ? <div id="player">Please wait</div> :
    currSong[0] === 'youtube' ?  
      <div id="player">
          <h1>YOUTUBE PLAYER</h1>
          <iframe src={`https://www.youtube.com/embed/${currSong[1].id.videoId}`}></iframe>
      </div> :
      <div id="player">
          <h1>SPOTIFY PLAYER</h1>
          <iframe src="https://open.spotify.com/embed/track/3ee8Jmje8o58CHK66QrVC2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
);


export default Player;