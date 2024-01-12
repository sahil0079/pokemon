import { Button } from "@mui/material";

const PokemonRow = ({ pokemon, onPokemonClicked }) => (
    <>
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td>
                <Button variant='contained' onClick={() => onPokemonClicked(pokemon)} >More Info</Button>
            </td>
        </tr>
    </>
)

export default PokemonRow;