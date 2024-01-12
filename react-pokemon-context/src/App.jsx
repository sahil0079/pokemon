import React, { useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonInfo from './components/PokemonInfo';
import PokemonContext from './contexts/PokemonContext';






const PageContainer = styled.div`
  margin: auto; 
  width:800px;
  padding-top:1em; 
`;

const Title = styled.h1`
  text-align: center;
`;

const ColumnLayout = styled.div`
  display:grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1em;
`;



function App() {
  const [filter, filterSet] = useState('');

  const [pokemon, pokemonSet] = useState([]);
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  async function fetchData() {
    const resp = await fetch('original.json');
    pokemonSet(await resp.json())
  }
  React.useEffect(() => {
    fetchData()
    // fetch('original.json')
    // .then(res => res.json())
    // .then(data => console.log(data))
  }, [])

  return (
    <PokemonContext.Provider value={
      {
        filter,
        filterSet,
        pokemon,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet
      }
    } >

      <PageContainer>
        <Title>Search Pokemon</Title>
        <ColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </ColumnLayout>
      </PageContainer>

    </PokemonContext.Provider>
  )
}

export default App