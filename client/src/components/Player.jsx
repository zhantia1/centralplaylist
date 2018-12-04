import React from 'react';
import YouTube from 'react-youtube';

const Player = ({ currSong, handleYoutubePlayer, play, nextInQueue }) => {
  
  let autoplay = play === true ? 1 : 0;
  const options = {
    height: '300',
    width: '300',
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
          <h1>SPOTIFY PLAYER</h1>
          <iframe src={`https://open.spotify.com/embed/track/${currSong[1].id}`} width="300" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
)};


export default Player;