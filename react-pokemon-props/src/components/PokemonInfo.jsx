const PokemonInfo = ({ name: { english }, base }) => (

    <div>
        <h2>{english}</h2>
        <tabel>
            <tbody>
                {
                    Object.keys(base).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{base[key]}</td>
                        </tr>
                    ))
                }
            </tbody>
        </tabel>
    </div>
);

export default PokemonInfo;