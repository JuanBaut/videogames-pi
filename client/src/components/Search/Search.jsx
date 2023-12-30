import { useNavigate } from "react-router-dom";
import style from "./Search.module.css";

function Search() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <form>
        <input placeholder="Buscar videojuego"></input>
        <button>Buscar</button>
      </form>
      <button onClick={() => navigate(`/`)}>Landing page</button>
      <button onClick={() => navigate(`/create`)}>Crear videojuego</button>
    </div>
  );
}

export default Search;
