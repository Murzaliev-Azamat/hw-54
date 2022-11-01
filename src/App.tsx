import React from 'react';
import './App.css';
import GameBoard from "./containers/GameBoard/GameBoard";

function App() {
  return (
    <div className="App">
      <GameBoard size={36}></GameBoard>
    </div>
  );
}

export default App;
