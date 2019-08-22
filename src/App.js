import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemoryGameComponent from './Components/MemoryGameComponent'
import {MemoryGame} from './MemoryGame'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemoryGameComponent memoryGame={new MemoryGame()} />
      </header>
    </div>
  );
}

export default App;
