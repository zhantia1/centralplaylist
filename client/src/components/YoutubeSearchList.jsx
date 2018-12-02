import React from 'react';
import YoutubeSearchListEntry from './YoutubeSearchListEntry.jsx';

var YoutubeSearchList = ({ youtubeVideos }) => (
  !youtubeVideos ? <div className="youtube-searches">Please wait</div> :
    <div className="youtube-searches">
      {youtubeVideos.map((video) =>
        <YoutubeSearchListEntry
          key={video.etag}
          video={video}
        />
      )}
    </div>
);


export default YoutubeSearchList;
