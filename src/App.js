import React from 'react';
import './App.css';
import { Textbox } from './features/TextBox/Textbox';
import { Tasks } from './features/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <div id='main-boxes'>
        <Textbox />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
