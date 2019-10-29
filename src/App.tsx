import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

const App: React.FC<{ count: number }> = props => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="light" onClick={() => setCount(count + 1)}>
          Add
        </Button>
        <p>Count: {count}</p>
      </header>
    </div>
  );
};

export default App;
