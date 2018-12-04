import React from 'react';

const Queue = ({ queue }) => (
  queue.length === 0 ? <div>Queue is currently empty</div> :
    <div id="queue">
      <h4>QUEUE GOES HERE:</h4>
      <ul>
        {queue.map((elem) => {
          if (elem[0] === 'spotify') {
            return <li key={elem[1].id}>{elem[1].name} by {elem[1].artists[0].name}</li>
          } else {
            return <li key={elem[1].etag}>{elem[1].snippet.title}</li>
          }
        })}
      </ul>
    </div>

)

export default Queue;