import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/game">Ir al juego</Link>
    </div>
  );
}

export default Home;
