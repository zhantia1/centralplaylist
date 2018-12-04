import React from 'react';
import YouTube from 'react-youtube';

const Player = ({ currSong, handleYoutubePlayer, play, nextInQueue }) => {
  
  let autoplay = play === true ? 1 : 0;
  const options = {
    height: '250',
    width: '250',
    playerVars: {
      autoplay: autoplay
    }
  }

  return (
  !currSong ? <div id="player">Please wait</div> :
      <div id="player">
          <YouTube
            videoId={currSong[1].id.videoId}
            opts={options}
            onReady={(e) => handleYoutubePlayer(e)}
            onStateChange={(e) => handleYoutubePlayer(e)}
            onEnd={(e) => nextInQueue(e)}
          />
          <iframe src={`https://open.spotify.com/embed/track/${currSong[1].id}`} width="250" height="250" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
)};


export default Player;