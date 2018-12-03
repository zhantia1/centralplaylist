import React from 'react';

const Queue = ({ queue }) => (
  !queue ? <div>Queue is currently empty</div> :
    <div id="queue">
      <h4>QUEUE GOES HERE:</h4>
      <ul>
        {queue.map((elem) => {
          return <li>{elem}</li>
        })}
      </ul>
    </div>

)

export default Queue;