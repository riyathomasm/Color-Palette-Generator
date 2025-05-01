
import React, { useState } from 'react';
import './colpall.css';

function ColorPalette({ colors, onColorClick }) {
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const handleColorBoxClick = (index) => {
    onColorClick(index);
    setShowSaveButton(true);
  };

  const savePalette = () => {
    setSavedPalettes([...savedPalettes, [...colors]]);
    setShowSaveButton(false);
  };

  const removeSavedPalette = (paletteIndex) => {
    const updatedPalettes = savedPalettes.filter((_, index) => index !== paletteIndex);
    setSavedPalettes(updatedPalettes);
  };

  return (
    <div className="palette-container">
      <div className="palette-grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorBoxClick(index)}
          >
            {color}
          </div>
        ))}
      </div>

      {showSaveButton && (
        <button className="save-button" onClick={savePalette}>
          Save This Palette
        </button>
      )}

      {savedPalettes.length > 0 && (
        <div className="saved-palettes-section">
          <h2>Saved Palettes</h2>
          <div className="saved-palettes">
            {savedPalettes.map((palette, paletteIndex) => (
              <div key={paletteIndex} className="saved-palette">
                <div className="mini-palette">
                  {palette.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="mini-color"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <button 
                  className="remove-palette" 
                  onClick={() => removeSavedPalette(paletteIndex)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPalette;