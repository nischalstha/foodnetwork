import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is our first web application - The FoodNetwork
        </p>
        <ul>
        <li>Anish Karki</li>
        <li>Ashish Rajthala</li>
        <li>Badal Karki</li>
        <li>Nischal Shrestha</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
