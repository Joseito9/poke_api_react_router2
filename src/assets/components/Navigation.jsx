import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";

const Navigation = () => {
  const navigate = useNavigate();
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-light text-decoration-none"
      : "text-dark text-decoration-none";

  return (
    <Navbar className="bg-danger">
      <Container>
        <Navbar.Brand>
          <div>
            <img
              onClick={() => navigate("/")}
              width="140"
              height="40"
              src={logo}
              alt="pokemon-logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <NavLink className={activeClass} to="/">
              {" "}
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            {" "}
            <NavLink className={activeClass} to="/pokemons">
              Pokemons
            </NavLink>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
