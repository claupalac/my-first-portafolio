// src/App.js
import React from 'react';
import './App.css';
import Title from './components/title/Title';
import Popup from './components/scrollpopup/ScrollPopup';

function App() {
  return (
    <div className="App">
        <Title></Title>
      <Popup message="You have scrolled down the page!" />
    </div>
  );
}

export default App;