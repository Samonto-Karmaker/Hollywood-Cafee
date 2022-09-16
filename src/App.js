import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import {BrowserRouter} from "react-router-dom"
import store from './redux/store';
import {Provider} from "react-redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
