import React from 'react';

var YoutubeSearchListEntry = ({ video }) => (

  <div className="youtube-video-entry">
    <div>
      <img src={video.snippet.thumbnails.default.url} />
    </div>
    <div>{video.snippet.title}</div>
  </div>

);


export default YoutubeSearchListEntry;
