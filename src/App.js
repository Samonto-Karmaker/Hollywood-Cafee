import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import {BrowserRoute} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRoute>
        <MainComponent />
      </BrowserRoute>
    </div>
  );
}

export default App;
