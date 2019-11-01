import React from 'react';
import gql from 'graphql-tag';
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

const PlanetName: React.FC<{ index: number }> = ({ index }) => {
  const { loading, data, error } = useQuery<GetPlanetData, GetPlanetVars>(
    GET_PLANET,
    {
      variables: {
        nb: index,
      },
      skip: !index,
    },
  );

  if (error) return <div>Error</div>;

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>No data found</div>;

  return <p>Name: {data.planet.name}</p>;
};

export default PlanetName;
