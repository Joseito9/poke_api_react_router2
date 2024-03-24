import { Route, Routes } from "react-router-dom";
import Navigation from "./assets/components/Navigation";
import HomePage from "./assets/views/HomePage";
import NotFound from "./assets/views/NotFound";
import Pokemons from "./assets/views/Pokemons";
import PokemonDetails from "./assets/views/PokemonDetails";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<PokemonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
