import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC<{ count: number; message?: string }> = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx with count:{props.count}</code> and save to
          reload.
        </p>
      </header>
    </div>
  );
};

export default App;
