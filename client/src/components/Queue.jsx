import React from 'react';

const Queue = ({ queue, currIndex }) => (
  queue.length === 0 ? <div>Queue is currently empty</div> :
    <div id="queue">
      <h4>QUEUE GOES HERE:</h4>
      <ul>
        {queue.map((elem, index) => {
          if (elem[0] === 'spotify') {
            {console.log(queue[currIndex])}
            if (index === currIndex) {
              return <li key={elem[1].id}>{elem[1].name} by {elem[1].artists[0].name} CURRENT QUEUE TRACK</li>
            } else {
              return <li key={elem[1].id}>{elem[1].name} by {elem[1].artists[0].name}</li>
            }
          } else {
            if (index === currIndex) {
              return <li key={elem[1].etag}>{elem[1].snippet.title} CURRENT QUEUE TRACK</li>
            } else {
              return <li key={elem[1].etag}>{elem[1].snippet.title}</li>
            }
          }
        })}
      </ul>
    </div>

)

export default Queue;