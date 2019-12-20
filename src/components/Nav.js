import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                    <NavLink exact to="/"><img src="http://togglehead.net/developer/authenticook//images/logo.png" /></NavLink>
                    </div>
                    <div className="nav-link">
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rules">How it Works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/workflow">Studio</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;