import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="container text-center">
      <Clock />
    </div>
  )
}

class Clock extends React.Component {
  render() {
    
    this.now = new Date();
    this.time = `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`;
  return <p>{this.time}</p>
  }
}

export default App;
