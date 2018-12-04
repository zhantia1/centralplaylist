const mongoose = require('mongoose');

const playListSchema = new mongoose.Schema({
  username: String,
  password: String,
  playlists: {
    name: String,
    queue: [],
  },
});

const Playlist = mongoose.model('Playlist', playListSchema);

module.exports = Playlist;