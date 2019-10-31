import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import './App.css';

const App: React.FC<{ count: number }> = props => {
  const [count, setCount] = useState(0);

  const StyledButton = styled(Button)`
    margin-bottom: 20px;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <StyledButton variant="light" onClick={() => setCount(count + 1)}>
          Add
        </StyledButton>
        <p>Count: {count}</p>
      </header>
    </div>
  );
};

export default App;
