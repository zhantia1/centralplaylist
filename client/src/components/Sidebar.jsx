import React from 'react';
import Queue from './Queue.jsx';
import Player from './Player.jsx';

const Sidebar = ({ queue, currSong, play, handleYoutubePlayer }) => (

      <div id="sidebar">
        <Queue queue={queue}/>
        <Player 
          currSong={currSong}
          play={play}
          handleYoutubePlayer={handleYoutubePlayer}
        />
      </div>

)

export default Sidebar;