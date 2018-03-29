import React, { Component } from 'react';
import Header from './components/Header/header';
import Search from './components/Search/search';
import Movies from './components/Movies/movies';
import Food from './components/Food/food';
import News from './components/News/news';
import Weather from './components/Weather/weather';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <Route exact path="/search" component={Search} />  
                                <Route exact path="/food" component={Food} />  
                                <Route exact path="/news" component={News} />
                                <Route exact path="/weather" component={Weather} />
                                <Route exact path="/movies" component={Movies} />          
                            </div>
                        </div>
                    </div>
                </div>
            </Router>                
        );
    }
}

export default App;