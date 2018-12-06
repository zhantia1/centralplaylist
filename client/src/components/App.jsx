import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';
import MainView from './MainView';
import searchYoutube from '../models/searchYoutube';
import searchSpotify from '../models/searchSpotify';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      play: false,
      firstMount: true,
      query: 'sad!',
      youtubeVideos: null,
      spotifyTracks: null,
      currSong: null,
      device_id: null,
      currYoutube: null,
      queue: [],
      playlists: [],
      viewPlaylist: false,
      access_token: null,
      spotifyReady: false,
    }
    this.handleNavSearchChange = this.handleNavSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.playNow = this.playNow.bind(this);
    this.playerCheckInterval = null;
    this.togglePlay = this.togglePlay.bind(this);
    this.handleYoutubePlayer = this.handleYoutubePlayer.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.nextInQueue = this.nextInQueue.bind(this);
    this.prevInQueue = this.prevInQueue.bind(this);
    this.handlePlaylistButtonClick = this.handlePlaylistButtonClick.bind(this);
    this.changePlaylistView = this.changePlaylistView.bind(this);
    this.handleUsePlaylist = this.handleUsePlaylist.bind(this);
  }

  componentWillMount() {
    this.handleSearchSubmit();
    this.playerCheckInterval = setInterval(() => {
      console.log('connecting to spotify...')
      this.checkForPlayer();
    }, 1000);
  }

  handleNavSearchChange(e) {
    this.setState({
      query: e.target.value
    });
    console.log(this.state)
  }

  addToQueue(type, item) {
    const { queue } = this.state;
    let newQueue = queue.slice();
    newQueue.push([type, item]);
    this.setState({
      queue: newQueue,
    }, () => {
      const { queue } = this.state;
      console.log(queue);
      // play song if first song in queue
      if (queue.length === 1) {
        const currSong = queue[0];
        this.playNow(currSong[0], currSong[1])
      }
    });
  }

  nextInQueue() {
    const { currSong, queue, currIndex } = this.state;
    if (queue.length === 0) {
      this.playNow(currSong[0], currSong[1])
    } else {
      let nextIndex = currIndex;
      if (currIndex !== (queue.length - 1)) {
        nextIndex += 1;
      }
      let nextSong = queue[nextIndex];
      this.setState({
        currSong: nextSong,
        currIndex: nextIndex,
      }, () => {
        this.playNow(nextSong[0], nextSong[1]);
      })
    }
  }

  handlePlaylistButtonClick() {
    axios.get('/playlist')
      .then((response) => {
        const savedPlaylists = response.data;
        this.setState({
          playlists: savedPlaylists,
          viewPlaylist: true,
        })
      });
  }

  prevInQueue() {
    const { currSong, queue, currIndex } = this.state;
    if (queue.length === 0) {
      this.playNow(currSong[0], currSong[1])
    } else {
      let prevIndex = currIndex;
      if (currIndex !== 0) {
        prevIndex -= 1;
      }
      let prevSong = queue[prevIndex];
      this.setState({
        currSong: prevSong,
        currIndex: prevIndex,
      }, () => {
        this.playNow(prevSong[0], prevSong[1]);
      })
    }
  }

  handleYoutubePlayer(e) {
    this.setState({
      currYoutube: e.target
    })
  }

  togglePlay() {
    const { play, currSong, currYoutube } = this.state;
    if (play) {
      if (currSong[0] === 'spotify') {
        // spotify built in toggle
        this.player.pause();
      } else {
        // stop youtube video
        currYoutube.pauseVideo();
      }
      this.setState({ play: false });
    } else {
      if (currSong[0] === 'spotify') {
        this.player.resume();
      } else {
        // resume youtube video
        currYoutube.playVideo();
      }
      this.setState({ play: true });
    }
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

  handleUsePlaylist(i) {
    const { playlists } = this.state;
    const loadedPlaylist = playlists[i].playlists.queue;
    this.setState({
      queue: loadedPlaylist,
      currIndex: 0,
    });
  }

  playNow(type, item) {
    const { currYoutube } = this.state;
    this.setState({ play: true });

    if (type === 'youtube') {
      // pause spotify player
      this.player.pause();
      this.setState({
        currSong: ['youtube', item]
      },() => {
        currYoutube.playVideo();
      })
    } else {
      // else its a spotify song
      this.setState({
        currSong: ['spotify', item]
      })
      this.spotifyPlay(item.uri)
    }
  }

  spotifyPlay(spotify_uri) {
    const { device_id } = this.state;
    let access_token = this.state.access_token;
    let refresh_token = window.location.hash.split('&')[1].slice(14);

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      }
    })
  }

  toggleSpotifyReady() {
    const { spotifyReady } = this.state;
    this.setState({
      spotifyReady: !spotifyReady,
    })
  }

  checkForPlayer() {
    let access_token = window.location.hash.slice(14);
    let refresh_token = window.location.hash.split('&')[1].slice(14);
    let expires_in = parseInt(window.location.hash.split('&')[2].slice(11));

    if (window.Spotify !== undefined) {
      
      // function to renew access token 
      setInterval(()=> {
        axios.get('/refresh_token', {
          params: {
            refresh_token: refresh_token,
          }
        })
          .then((response) => {
            access_token = response.data.access_token;
            this.setState({
              access_token: access_token,
            })
            console.log(response);
          })
      }, expires_in * 1000);

      clearInterval(this.playerCheckInterval);

      this.player = new window.Spotify.Player({
        name: 'Central Playlist Spotify Player',
        getOAuthToken: cb => { cb(access_token); },
      });

      // event handlers
      this.player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.setState({
          access_token: access_token,
          device_id: device_id
        }, () => {
          this.toggleSpotifyReady();
        });
      });

      this.player.addListener('player_state_changed', state => {
          console.log('SPOTIFY STATE', state); 
          if(state.paused && state.position === 0) {
            console.log('Track ended');
            this.nextInQueue();
          }
        }
      );

      // connect
      this.player.connect();
    }
  }

  changePlaylistView() {
    const { viewPlaylist } = this.state;
    this.setState({
      viewPlaylist: !viewPlaylist
    })
  }

  render() {
    const { youtubeVideos, currSong, spotifyTracks, play, queue, currIndex, playlists, viewPlaylist, spotifyReady } = this.state;

    return (

      <div>
        <Nav 
          handleNavSearchChange={this.handleNavSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
          handlePlaylistButtonClick={this.handlePlaylistButtonClick}
          spotifyReady={spotifyReady}
        />
        <MainView
          youtubeVideos={youtubeVideos}
          spotifyTracks={spotifyTracks}
          playNow={this.playNow}
          playlists={playlists}
          addToQueue={this.addToQueue}
          viewPlaylist={viewPlaylist}
          changePlaylistView={this.changePlaylistView}
          handleUsePlaylist={this.handleUsePlaylist}
        />
        <Sidebar 
          queue={queue}
          currIndex={currIndex}
          youtubeVideos={youtubeVideos}
          currSong={currSong}
          play={play}
          nextInQueue={this.nextInQueue}
          handleYoutubePlayer={this.handleYoutubePlayer}
        />
        <Footer 
          togglePlay={this.togglePlay}
          nextInQueue={this.nextInQueue}
          prevInQueue={this.prevInQueue}
        />
      </div>
    )
  }
}

export default App;