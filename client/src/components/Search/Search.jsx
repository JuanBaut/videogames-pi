import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { onSearch } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setQuery(event.target.value);
      dispatch(onSearch(query));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(onSearch(query));
  }, [query, dispatch]);

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
      </div>

      <div className={style.right}>
        <button onClick={() => navigate(`/`)}>Landing</button>
        <button onClick={() => navigate(`/create`)}>Create</button>
      </div>
    </div>
  );
}

export default Search;
