import React from 'react';
import Queue from './Queue.jsx';
import Player from './Player.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: null,
    }
  }

  render() {
    const { queue } = this.state;
    const { currSong } = this.props;
    return (
      <div id="sidebar">
        <Queue queue={queue}/>
        <Player currSong={currSong}/>
      </div>
    )
  }
}

export default Sidebar;