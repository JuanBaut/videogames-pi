import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../../redux/actions/onSearch";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const totalVideogames = useSelector((state) => state.totalVideogames);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setQuery(event.target.value);
      dispatch(onSearch(query));
      setQuery("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    dispatch(onSearch(query));
    setQuery("");
  };

  const handleReset = (event) => {
    event.preventDefault();
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        <button onClick={handleReset}>Reset</button>
        <h6>{totalVideogames}</h6>
      </div>

      <div className={style.right}>
        <button onClick={() => navigate(`/`)}>Landing</button>
        <button onClick={() => navigate(`/create`)}>Create</button>
      </div>
    </div>
  );
}

export default Search;
