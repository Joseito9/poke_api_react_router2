import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const { name, stats, src, type } = pokemon;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemons`);
  };

  return (
    <>
      <Card className="container">
        <Card.Img className="pokemon-img" src={src} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {stats?.map((stat, id) => (
              <li key={id}>
                {stat.name} : {stat.base}
              </li>
            ))}
          </Card.Text>
          <Card.Text> {type} </Card.Text>
        </Card.Body>
      </Card>
      <div className="container">
        <button onClick={handleClick}>Back to Pokemons</button>
      </div>
    </>
  );
};

export default PokemonCard;
