import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let title = "react and jsx"
  return (
    <div>
      <h1 id="h1" className="main-title">{title}</h1>
      <p style={{color:"red"}}>HTML kakemasu</p>
    </div>
  );
}

export default App;
