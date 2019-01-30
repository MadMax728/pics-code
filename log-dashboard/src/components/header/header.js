import React, { Component } from 'react';
import '../../App.css';
import img from '../images/login-logo.png';
import { NavLink } from 'react-router-dom';
class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div class="login-process">
               <header>
                <div class="custom-container">			
                    <div class="login-logo1">
                        <a href=""><img src={img} /></a>
                    </div>
                    
                    {/* <ul className="login-header-menu">
                        <li><NavLink to='/'>History Log</NavLink></li>
                        <li><NavLink to='/Errorlog'>Error Log</NavLink></li>
                    </ul> */}
                </div>
	            </header>
            </div>
        );
    }
}

export default Header;
