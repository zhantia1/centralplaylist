import React from 'react';

const Footer = ({ togglePlay, nextInQueue, prevInQueue }) => (

  <div id="Footer">
    <h1>FOOTER GOES HERE</h1>
    <button onClick={(e) => prevInQueue(e)}>PREV</button>
    <button onClick={(e) => togglePlay(e)}>PLAY/PAUSE</button>
    <button onClick={(e) => nextInQueue(e)}>NEXT</button>
  </div>

)


export default Footer;