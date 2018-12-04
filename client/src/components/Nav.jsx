import React from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';

const Nav = ({handleNavSearchChange, handleSearchSubmit, handlePlaylistButtonClick}) => (

  <div id="nav">
    <Button animated as='a' size='big' id="spotify-login" href="/login">
      <Button.Content visible>
        <Icon name='spotify' />
      </Button.Content>
      <Button.Content hidden>AUTH</Button.Content>
    </Button>
    <Input icon='search' placeholder='Search for songs...'
      type="text"
      onChange={(e) => handleNavSearchChange(e)}
    >
    </Input>
    <div className="nav-buttons">
      <Button icon labelPosition='right' onClick={(e) => handleSearchSubmit(e)}>
        <Icon name='search' />
        Search
      </Button>
      <Button onClick={(e) => handlePlaylistButtonClick(e)}>Playlists</Button>
    </div>
  </div>

)


export default Nav;