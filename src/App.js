import React from 'react';
import './App.css';
import Card from './Card.js';


function App() { 
  return (
    <div>
      <div className="card-container">
        <Card face="queen1"/>
        <Card face="king"/>
        <Card face="queen2"/>
      </div>
      <div className="button-container">
        <button>Play</button>
      </div>
    </div>
  );
}

export default App;
