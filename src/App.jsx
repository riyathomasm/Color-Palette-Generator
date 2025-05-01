import React, { useState } from 'react';
import './App.css';
import ColorPalette from './colpall.js';

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function App() {
  const [colors, setColors] = useState([
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
  ]);

  const handleColorClick = (index) => {
    const newColors = [...colors];
    newColors[index] = getRandomHexColor();
    setColors(newColors);
  };

  return (
    <div className="app">
      <h1 className="title">Color Generator</h1>
      <ColorPalette colors={colors} onColorClick={handleColorClick} />
    </div>
  );
}

export default App;


