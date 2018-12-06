import React from 'react';
import { List, Header, Icon, Button } from 'semantic-ui-react';

const Queue = ({ queue, currIndex, removeFromQueue }) => (
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
                <List.Item key={`${index}${elem[1].id}`}>
                  <List.Content>
                    <List.Header className="currTrack-spotify">
                      {elem[1].name} by {elem[1].artists[0].name}
                    </List.Header>
                    <Button onClick={() => removeFromQueue(index)} size="mini" circular icon="minus"></Button>
                    <Button size="mini" circular icon="save"></Button>
                  </List.Content>
                </List.Item>
              )
            } else {
                return (
                  <List.Item key={`${index}${elem[1].id}`}>
                    <List.Content>
                        <List.Header>
                          {elem[1].name} by {elem[1].artists[0].name}
                        </List.Header>
                        <Button onClick={() => removeFromQueue(index)} size="mini" circular icon="minus"></Button>
                        <Button size="mini" circular icon="save"></Button>
                      </List.Content>
                  </List.Item>
                )
            }
          } else {
            if (index === currIndex) {
              return (
                <List.Item key={`${index}${elem[1].etag}`}>
                    <List.Content>
                        <List.Header className='currTrack-youtube'>
                          {elem[1].snippet.title}
                        </List.Header>
                        <Button onClick={() => removeFromQueue(index)} size="mini" circular icon="minus"></Button>
                        <Button size="mini" circular icon="save"></Button>
                      </List.Content>
                  </List.Item>
              )
            } else {
              return (
                <List.Item key={`${index}${elem[1].etag}`}>
                    <List.Content>
                        <List.Header>
                          {elem[1].snippet.title}
                        </List.Header>
                        <Button onClick={() => removeFromQueue(index)} size="mini" circular icon="minus"></Button>
                        <Button size="mini" circular icon="save"></Button>
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