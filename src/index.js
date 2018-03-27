import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './static/images/yaani-logo.png';
import Search from './components/Search'
import registerServiceWorker from './registerServiceWorker';

class Home extends React.Component{
    render(){
        return(
            <div className="Bg-main Text-center">
                <div className="Div-logo"><img src={logo} className="Img-logo" alt="Yaani" /></div>
                <Search />                            
            </div>
        );
    }
}

ReactDOM.render(
    <Home />, 
    document.getElementById('root')
);

registerServiceWorker();