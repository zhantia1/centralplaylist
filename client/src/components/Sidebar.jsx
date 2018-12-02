import React from 'react';
import Queue from './Queue.jsx';
import Player from './Player.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [1, 2, 3],
    }
  }

  render() {
    const { queue } = this.state;
    const { youtubeVideos } = this.props;
    return (
      <div id="sidebar">
        <Queue queue={queue}/>
        <Player youtubeVideos={youtubeVideos}/>
      </div>
    )
  }
}

export default Sidebar;