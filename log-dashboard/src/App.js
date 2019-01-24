import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Router from './Router';

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>History Log</NavLink></li>
    <li><NavLink to='/Errorlog'>Error Log</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <h1>History and Error Data</h1>
        <Navigation />
        <Router />
      </div>      
    );
  }
}

export default App;
