import { usePokemonContextValue } from "../contexts/PokemonContext";

const PokemonInfo = () => {
    const { selectedPokemon } = usePokemonContextValue();
    return selectedPokemon ? (

        <div>
            <h2>{selectedPokemon.name.english}</h2>
            <tabel>
                <tbody>
                    {
                        Object.keys(selectedPokemon.base).map((key) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{selectedPokemon.base[key]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </tabel>
        </div>
    ) : null;
}


export default PokemonInfo;