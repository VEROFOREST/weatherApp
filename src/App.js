import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js'

import APIConfig from './APIConfig';



function App() {
  return (
    <div className="App">
          
          < Header />
          <div className="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">
                 < APIConfig/>
                </div>
            </div>
          </div>
    </div> 
    
  );
}

export default App;
