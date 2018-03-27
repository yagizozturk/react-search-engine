import React from 'react';
import './style.css';
import Navigation from '../Navigation';

class Search extends React.Component{
    _handleKeyPress = (e) => {
        if(e.key === "Enter"){
            console.log("Searching: " + e.target.value);            
        }
    }

    render(){
        return (
            <div className="Bg-main Text-center">                
                <div className="Margin-t-b-md Padding-t-b-md">
                    <input type="text" className="Input-search" onKeyPress={this._handleKeyPress} />
                </div>
                <Navigation />
            </div>
        );
    }
}

export default Search;