import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const getPokemons = async () => {
    try {
      const baseUrl = "https://pokeapi.co/api/v2/";
      const res = await fetch(`${baseUrl}pokemon?limit=600&offset=0`);

      if (!res.ok) {
        throw new Error("Failed to fetch Pokemon list");
      }

      const data = await res.json();
      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);

        if (!res.ok) {
          throw new Error(`Failed to fetch details for ${pokemon.name}`);
        }

        const data = await res.json();
        return data;
      });

      const results = await Promise.all(promises);
      setAllPokemons([...allPokemons, ...results]);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  const handleSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        selectedPokemon,
        handleSelect,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
