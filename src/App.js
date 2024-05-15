import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      import React, { useState } from 'react';

function MockupEditor({ mockupSrc }) {
  const [textColor, setTextColor] = useState('#000000'); // Initial text color

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  const applyStyles = (image) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const imageObj = new Image();

    imageObj.onload = () => {
      canvas.width = imageObj.width;
      canvas.height = imageObj.height;
      context.drawImage(imageObj, 0, 0);

      // Adjust styles based on customization options (here: text color)
      context.fillStyle = textColor;
      // Replace this with logic to target specific text elements within the image
      context.fillText('Your Text', 100, 100); // Replace with dynamic text content and position

      const updatedImage = canvas.toDataURL('image/png');
      return updatedImage;
    };

    imageObj.src = mockupSrc; // Set the source of the mockup image
    return image;
  };

  return (
    <div>
      <input type="color" value={textColor} onChange={handleTextColorChange} />
      <img src={applyStyles(mockupSrc)} alt="Mockup" />
    </div>
  );
}

export default MockupEditor;

    </div>
  );
}

export default App;
