import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Food from '../Food';
import Movies from '../Movies';
import News from '../News';
import Weather from '../Weather';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="Margin-t-b-md Padding-t-b-md">
                        <ul className="List-icons">
                            <li><Link to="/food">Food</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/weather">Weather</Link></li>
                            <li><Link to="/movies">Movies</Link></li>
                        </ul>
                        <Route path="/food" component={Food} />
                        <Route path="/news" component={News} />
                        <Route path="/weather" component={Weather} />
                        <Route path="/movies" component={Movies} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navigation;