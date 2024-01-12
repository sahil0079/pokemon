import { createContext, useContext } from "react";

//create the context
const PokemonContext = createContext({});

export const usePokemonContextValue = () => useContext(PokemonContext);

export default PokemonContext;


