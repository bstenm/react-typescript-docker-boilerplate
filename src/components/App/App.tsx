import React from 'react';
import Home from '../Home';
import styled from 'styled-components';

const App: React.FC = () => {
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

  return (
    <App>
      <Header>
        <Home message="Add" />
      </Header>
    </App>
  );
};

export default App;
