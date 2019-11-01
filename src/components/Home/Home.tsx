import React, { useState } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/react-hooks';

interface Planet {
  name: string;
}

interface GetPlanetVars {
  nb: number;
}

interface GetPlanetData {
  planet: Planet;
}

const GET_PLANET = gql`
  query planet($nb: Int!) {
    planet(nb: $nb) {
      name
    }
  }
`;

const Home: React.FC<{ message: string }> = ({ message }) => {
  const AddButton = styled(Button)`
    margin-bottom: 20px;
  `;

  const [count, setCount] = useState(0);

  const { loading, data, error } = useQuery<GetPlanetData, GetPlanetVars>(
    GET_PLANET,
    {
      variables: {
        nb: count,
      },
      skip: !count,
    },
  );

  return (
    <div>
      <AddButton variant="light" onClick={() => setCount(count + 1)}>
        {message}
      </AddButton>
      <p>Count: {count}</p>
      {!!error && <div>Error</div>}
      {!!loading && <div>Loading...</div>}
      {!error && !loading && !!data && <p>Planet: {data.planet.name}</p>}
    </div>
  );
};

export default Home;
