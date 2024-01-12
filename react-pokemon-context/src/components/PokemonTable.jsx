import React from 'react';
import PokemonRow from './PokemonRow';
import { usePokemonContextValue } from '../contexts/PokemonContext';

function PokemonTable() {
    const { filter, pokemon, selectedPokemonSet } = usePokemonContextValue();
    return (
        <table width='100%'>
            <tbody>
                {
                    pokemon?.slice(0, 20).map((pokemon) => (
                        <PokemonRow
                            key={pokemon.id}
                            pokemon={pokemon}
                            onPokemonClicked={(pokemon) => selectedPokemonSet(pokemon)}
                        // {...pokemon}
                        />

                    ))
                }
            </tbody>
        </table>
    )
}

export default PokemonTable