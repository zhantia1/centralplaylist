import React from 'react';
import { Button } from 'semantic-ui-react';

var YoutubeSearchListEntry = ({ video, playNow, addToQueue }) => (

  <div className="youtube-video-entry">
    <div className="youtube-left">
      <img src={video.snippet.thumbnails.default.url} />
    </div>
    <div className="youtube-right">
      <h4>{video.snippet.title}</h4>
      <Button circular icon='play' onClick={() => playNow('youtube', video)}></Button>
      <Button circular icon='add' onClick={() => addToQueue('youtube', video)}></Button>
    </div>
  </div>

);


export default YoutubeSearchListEntry;
