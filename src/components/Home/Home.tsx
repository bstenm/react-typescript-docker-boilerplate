import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import PlanetName from '../PlanetName';

const Home: React.FC = () => {
  const AddButton = styled(Button)`
    margin-bottom: 20px;
  `;

  const [count, setCount] = useState(0);

  return (
    <div>
      <AddButton variant="light" onClick={() => setCount(count + 1)}>
        Next Planet
      </AddButton>
      <p>Number: {count}</p>
      <PlanetName index={count} />
    </div>
  );
};

export default Home;
