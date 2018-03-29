import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Yaani</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">                        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/food">Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/weather">Weather</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movies">Movies</Link>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </nav>
        );
    }
}

export default Header;