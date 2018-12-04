import React from 'react';
import YoutubeSearchListEntry from './YoutubeSearchListEntry.jsx';

var YoutubeSearchList = ({ youtubeVideos, playNow, addToQueue }) => (
  !youtubeVideos ? <div className="youtube-searches">Please wait</div> :
    <div className="youtube-searches">
      {youtubeVideos.map((video) =>
        <YoutubeSearchListEntry
          key={video.etag}
          video={video}
          playNow={playNow}
          addToQueue={addToQueue}
        />
      )}
    </div>
);


export default YoutubeSearchList;
