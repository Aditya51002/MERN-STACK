import React from "react";
import BlockGame from "./Game/BlockGame.jsx";
import "./App.css";

function App() {
  return (
    <div className="app flex items-center justify-center min-h-screen bg-gray-100">
      <div className="game-container p-6 bg-white rounded-lg shadow-lg">
        <BlockGame />
      </div>
    </div>
  );
}

export default App;