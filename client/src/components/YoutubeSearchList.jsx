import React from 'react';
import YoutubeSearchListEntry from './YoutubeSearchListEntry';

var YoutubeSearchList = ({ youtubeVideos, playNow, addToQueue }) => (
  !youtubeVideos ? <div className="youtube-searches">Please wait</div> :
    <div className="youtube-searches">
      <h3>Youtube Searches:</h3>
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
