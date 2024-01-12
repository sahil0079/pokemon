import React from 'react';
import PokemonRow from './PokemonRow';

function PokemonTable({ pokemon, onPokemonClicked }) {
    return (
        <table width='100%'>
            <tbody>
                {
                    pokemon?.slice(0, 20).map((pokemon) => (
                        <PokemonRow
                            key={pokemon.id}
                            pokemon={pokemon}
                            onPokemonClicked={onPokemonClicked}
                        // {...pokemon}
                        />

                    ))
                }
            </tbody>
        </table>
    )
}

export default PokemonTable