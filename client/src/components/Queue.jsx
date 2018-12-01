import React from 'react';

const Queue = (props) => (

  <div id="queue">
    <ul>
      {props.queue.map((elem) => {
        return <li>{elem}</li>
      })}
    </ul>
  </div>

)

export default Queue;