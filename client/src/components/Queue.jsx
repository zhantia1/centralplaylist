import React from 'react';
import { List, Header, Icon } from 'semantic-ui-react';

const Queue = ({ queue, currIndex }) => (
  queue.length === 0 ? 
    <div id="queue">
      <Header as='h4'>
        <Icon name="unordered list"/>
        <Header.Content>QUEUE:</Header.Content>
        <div>Queue is currently empty...</div>
      </Header>
    </div> :
    <div id="queue">
      <Header as='h4'>
        <Icon name="unordered list"/>
        <Header.Content>QUEUE:</Header.Content>
      </Header>
      <List divided relaxed>
        {queue.map((elem, index) => {
          if (elem[0] === 'spotify') {
            if (index === currIndex) {
              return (
                <List.Item key={elem[1].id}>
                  <List.Content>
                    <List.Header className="currTrack">
                      {elem[1].name} by {elem[1].artists[0].name}
                    </List.Header>
                  </List.Content>
                </List.Item>
              )
            } else {
                return (
                  <List.Item key={elem[1].id}>
                    <List.Content>
                        <List.Header>
                          {elem[1].name} by {elem[1].artists[0].name}
                        </List.Header>
                      </List.Content>
                  </List.Item>
                )
            }
          } else {
            if (index === currIndex) {
              return (
                <List.Item key={elem[1].etag}>
                    <List.Content>
                        <List.Header className='currTrack'>
                          {elem[1].snippet.title}
                        </List.Header>
                      </List.Content>
                  </List.Item>
              )
            } else {
              return (
                <List.Item key={elem[1].etag}>
                    <List.Content>
                        <List.Header>
                          {elem[1].snippet.title}
                        </List.Header>
                      </List.Content>
                  </List.Item>
              )
            }
          }
        })}
      </List>
    </div>

)

export default Queue;