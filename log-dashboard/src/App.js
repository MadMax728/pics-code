import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';

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
        <h1 className="log-data-header">History and Error Data</h1>
        <Navigation />
        <Router />
      </div>      
    );
  }
}

export default App;
