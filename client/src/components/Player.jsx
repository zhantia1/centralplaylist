import React from 'react';

const Player = ({ youtubeVideos }) => (
  !youtubeVideos ? <div id="player">Please wait</div> :
    <div id="player">
      <h1>THE PLAYER GOES HERE</h1>
      <iframe src={`https://www.youtube.com/embed/${youtubeVideos[0].id.videoId}`}></iframe>
      <iframe src="https://open.spotify.com/embed/track/3ee8Jmje8o58CHK66QrVC2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    </div>

);


export default Player;