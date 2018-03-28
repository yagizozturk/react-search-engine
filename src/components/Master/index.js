import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../../components/Search';
import Movies from '../../components/Movies';
import News from '../../components/News';
import Weather from '../../components/Weather';

class Master extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Yaani</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <Router>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to="/">Search</Link>
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
                            </Router>
                        </div>                    
                    </div>
                </nav>            
                <div>
                    <Router>
                        <div>
                            <Route path="/" component={Search} />  
                            <Route path="/results" component={News} />
                            <Route path="/weather" component={Weather} />
                            <Route path="/movies" component={Movies} />  
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Master;