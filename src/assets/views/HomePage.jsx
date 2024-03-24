import pikachu from "../img/pikachu.png";

const HomePage = () => {
  return (
    <div>
      <section className="container">
        <h1>Your Favorite Pokedex</h1>
      </section>
      <article className="container">
        <img className="home_pikachu" src={pikachu} alt="detective-pikachu" />
      </article>
    </div>
  );
};

export default HomePage;
