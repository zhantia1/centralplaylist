import React from 'react';

var YoutubeSearchListEntry = ({ video }) => (

  <div className="youtube-video-entry">
    <div>
      <img src={video.snippet.thumbnails.default.url} />
    </div>
    <div>{video.snippet.title}</div>
    <button>PLAY NOW</button>
    <button>ADD TO QUEUE</button>
  </div>

);


export default YoutubeSearchListEntry;
