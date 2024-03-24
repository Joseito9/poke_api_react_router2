import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const Pokemons = () => {
  const { allPokemons, selectedPokemon, handleSelect } =
    useContext(PokemonContext);
  const navigate = useNavigate();

  const pokemonDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemons/${selectedPokemon}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "You didn't select any pokemon",
        text: "Please, Choose a pokemon!",
      });
    }
  };

  return (
    <div>
      <section className="container">
        <h1>View details of your favorite Pokémon</h1>
      </section>
      <section className="select-container">
        <select
          className="selectpokemon"
          value={selectedPokemon}
          onChange={({ target }) => handleSelect(target.value)}
        >
          <option value="">Choose a Pokémon</option>
          {allPokemons.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <article>
          <button onClick={pokemonDetails}>View Pokémon Details</button>
        </article>
      </section>
    </div>
  );
};

export default Pokemons;
