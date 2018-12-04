import React from 'react';

const Footer = ({ togglePlay, nextInQueue, prevInQueue }) => (

  <div id="Footer">
    <button onClick={(e) => prevInQueue(e)}>PREV</button>
    <button onClick={(e) => togglePlay(e)}>PLAY/PAUSE</button>
    <button onClick={(e) => nextInQueue(e)}>NEXT</button>
  </div>

)


export default Footer;