import React from 'react';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import MainView from './MainView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.handleNavSearch = this.handleNavSearch.bind(this);
  }

  handleNavSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Nav 
          handleNavSearch={this.handleNavSearch}
        />
        <MainView />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default App;