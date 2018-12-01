import React from 'react';
// import Search from './Search.jsx';

const Nav = (props) => (

  <div id="nav">
    <input
      type="text"
      onChange={(e) => props.handleNavSearch(e)}
    >
    </input>
    <button>Search</button>
    <button>Login</button>
  </div>

)


export default Nav;