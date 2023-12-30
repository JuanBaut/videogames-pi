import { useNavigate } from "react-router-dom";
import style from "./Search.module.css";

function Search() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.left}>
        <form>
          <input placeholder="Buscar videojuego"></input>
          <button>Buscar</button>
        </form>
      </div>

      <div className={style.right}>
        <button onClick={() => navigate(`/`)}>Landing</button>
        <button onClick={() => navigate(`/create`)}>Create</button>
      </div>
    </div>
  );
}

export default Search;
