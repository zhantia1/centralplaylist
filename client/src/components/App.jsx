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
      query: 'sad!',
      youtubeVideos: null,
    }
    this.handleNavSearchChange = this.handleNavSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
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

  handleSearchSubmit(e) {
    const { query } = this.state;
    searchYoutube({ query }, (videos) => {
      console.log('searched!', videos);
      this.setState({
        youtubeVideos: videos,
      })
    });
    searchSpotify({ query }, (songs) => {
      console.log('searchedSpotify!', songs);
    })
  }

  render() {
    const { youtubeVideos, currVideo } = this.state;
    return (
      <div>
        <Nav 
          handleNavSearchChange={this.handleNavSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <MainView
          youtubeVideos={youtubeVideos}
        />
        <Sidebar 
          youtubeVideos={youtubeVideos}
          currVideo={currVideo}
        />
        <Footer />
      </div>
    )
  }
}

export default App;