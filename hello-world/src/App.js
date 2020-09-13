import React from 'react';
import './App.css';
import Hello from './components/Hello';
import logger from './logger';

function App() {

  logger.info("App component is called");

  return (
    <div className="App">
      <Hello></Hello>
    </div>
  );
}

export default App;
