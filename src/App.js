import React from 'react';
import './App.css';
import MemoryGameComponent from './Components/MemoryGameComponent'
import {MemoryGame} from './MemoryGame'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemoryGameComponent />
      </header>
    </div>
  );
}

export default App;
