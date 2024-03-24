import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const getPokemons = async (name) => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    try {
      const rest = await fetch(`${baseUrl}/${name}`);
      if (!rest.ok) {
        throw new Error("Error");
      }
      const data = await rest.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join(" ");
      setPokemon({ name, stats, src, type });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons(name);
  }, [name]);

  return <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetails;
