import React from 'react';
import Queue from './Queue';
import Player from './Player';

const Sidebar = ({ queue, currSong, play, handleYoutubePlayer, nextInQueue, currIndex, removeFromQueue }) => (

      <div id="sidebar">
        <Queue 
          queue={queue}
          currIndex={currIndex}
          removeFromQueue={removeFromQueue}
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