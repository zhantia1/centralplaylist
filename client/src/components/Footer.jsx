import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Footer = ({ togglePlay, nextInQueue, prevInQueue }) => (

  <div id="Footer">
    <Button.Group>
      <Button animated onClick={(e) => prevInQueue(e)}>
        <Button.Content visible>
          <Icon name='angle double left' />
        </Button.Content>
        <Button.Content hidden>PREV</Button.Content>
      </Button>
      <Button size='big' animated onClick={(e) => togglePlay(e)}>
        <Button.Content visible>
          <Icon name='play' />
          <Icon name='pause' />
        </Button.Content>
        <Button.Content hidden>PLAY/PAUSE</Button.Content>
      </Button>
      <Button animated onClick={(e) => nextInQueue(e)}>
        <Button.Content visible>
          <Icon name='angle double right' />
        </Button.Content>
        <Button.Content hidden>Next</Button.Content>
      </Button>
    </Button.Group>
  </div>

)


export default Footer;