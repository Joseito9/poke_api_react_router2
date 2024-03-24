import giphy from "../img/giphy.gif";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>Oops! Looks like you're lost.</h1>
        <p>Please use one of the routes listed above.</p>
        <img src={giphy} alt="crying-pikachu" />
      </div>
    </>
  );
};

export default NotFound;
