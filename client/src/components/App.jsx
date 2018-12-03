import React from 'react';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import MainView from './MainView.jsx';
import searchYoutube from '../models/searchYoutube';
import searchSpotify from '../models/searchSpotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMount: true,
      query: 'sad!',
      youtubeVideos: null,
      spotifyTracks: null,
      currSong: null,
    }
    this.handleNavSearchChange = this.handleNavSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.playNow = this.playNow.bind(this);
  }

  componentWillMount() {
    this.handleSearchSubmit();
  }

  handleNavSearchChange(e) {
    this.setState({
      query: e.target.value
    });
    console.log(this.state)
  }

  handleLogin() {
    this.setState({
      loggedIn: true,
    })
  }

  handleSearchSubmit() {
    const { query, firstMount } = this.state;
    searchYoutube({ query }, (videos) => {
      console.log('youtube searched!', videos);
      this.setState({
        youtubeVideos: videos,
      });
      if (firstMount) {
        this.setState({
          firstMount: false,
          currSong: ['youtube', videos[0]],
        });
      }
    });
    searchSpotify({ query }, (tracks) => {
      console.log('spotify searched!', tracks);
      this.setState({
        spotifyTracks: tracks,
      });
    });
  }

  playNow(e) {
    e.preventDefault();
    console.log(e.target)
  }

  render() {
    const { youtubeVideos, currSong, spotifyTracks } = this.state;

    return (
      <div>
        <a id="spotify-login" href="/login">LOGIN WITH SPOTIFY</a> :
        <Nav 
          handleNavSearchChange={this.handleNavSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <MainView
          youtubeVideos={youtubeVideos}
          spotifyTracks={spotifyTracks}
          playNow={this.playNow}
        />
        <Sidebar 
          youtubeVideos={youtubeVideos}
          currSong={currSong}
        />
        <Footer />
      </div>
    )
  }
}

export default App;