import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;