import React from 'react';

const Queue = (props) => (

  <div id="queue">
    <h4>QUEUE GOES HERE:</h4>
    <ul>
      {props.queue.map((elem) => {
        return <li>{elem}</li>
      })}
    </ul>
  </div>

)

export default Queue;