import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const App: React.FC<{ count: number }> = props => {
  const [count, setCount] = useState(0);

  const App = styled.div`
    text-align: center;
  `;

  const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const AddButton = styled(Button)`
    margin-bottom: 20px;
  `;

  return (
    <App>
      <Header>
        <AddButton variant="light" onClick={() => setCount(count + 1)}>
          Add
        </AddButton>
        <p>Count: {count}</p>
      </Header>
    </App>
  );
};

export default App;
