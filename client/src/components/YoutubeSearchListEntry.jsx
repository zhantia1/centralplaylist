import React from 'react';

var YoutubeSearchListEntry = ({ video, playNow, addToQueue }) => (

  <div className="youtube-video-entry">
    <div>
      <img src={video.snippet.thumbnails.default.url} />
    </div>
    <div>{video.snippet.title}</div>
    <button onClick={() => playNow('youtube', video)}>PLAY NOW</button>
    <button onClick={() => addToQueue('youtube', video)}>ADD TO QUEUE</button>
  </div>

);


export default YoutubeSearchListEntry;
