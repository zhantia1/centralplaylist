import React from 'react';
import YoutubeSearchList from './YoutubeSearchList.jsx';

const MainView = ({ youtubeVideos }) => (

  <div id="MainView">
    <h1>THE MainView GOES HERE</h1>
    <h3>Youtube Searches:</h3>
    <YoutubeSearchList youtubeVideos={youtubeVideos}/>
    <h3>Spotify Searches:</h3>
  </div>

)

export default MainView;