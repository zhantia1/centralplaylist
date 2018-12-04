import React from 'react';
import Queue from './Queue.jsx';
import Player from './Player.jsx';

const Sidebar = ({ queue, currSong, play, handleYoutubePlayer, nextInQueue, currIndex }) => (

      <div id="sidebar">
        <Queue 
          queue={queue}
          currIndex={currIndex}
        />
        <Player 
          currSong={currSong}
          play={play}
          nextInQueue={nextInQueue}
          handleYoutubePlayer={handleYoutubePlayer}
        />
      </div>

)

export default Sidebar;