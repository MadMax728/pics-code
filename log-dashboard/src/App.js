import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';
import Header from './components/header/header'

const Navigation = (props) => <nav>
  <ul className="log-data-tabs">
    <li><NavLink to='/'>History Log</NavLink></li>
    <li><NavLink to='/Errorlog'>Error Log</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className='page-container log-data'>
        <Header />
        <Navigation />
        <Router />
      </div>      
    );
  }
}

export default App;
