import React from 'react';
// import Search from './Search.jsx';

const Nav = (props) => (

  <div id="nav">
    <a id="spotify-login" href="/login">LOGIN TO SPOTIFY</a>
    <input
      type="text"
      onChange={(e) => props.handleNavSearchChange(e)}
    >
    </input>
    <button
      onClick={(e) => props.handleSearchSubmit(e)}
    >
      Search
    </button>
    <button>Login</button>
  </div>

)


export default Nav;