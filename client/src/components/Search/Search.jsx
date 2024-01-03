import style from "./Search.module.css";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../../redux/actions/onSearch";
import { setCurrentPage } from "../../redux/actions/setCurrentPage";
import { getVideogames } from "../../redux/actions/getVideogames";

export default function Search() {
  const totalVideogames = useSelector((state) => state.totalVideogames);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setQuery(event.target.value);
      dispatch(onSearch(query));
      setQuery("");
      dispatch(setCurrentPage(1));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    dispatch(onSearch(query));
    setQuery("");
    dispatch(setCurrentPage(1));
  };

  const handleReset = (event) => {
    event.preventDefault();
    dispatch(getVideogames());
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
        <button>Order</button>
        <button onClick={() => setIsOpen(true)}>Filter</button>
        <button onClick={() => navigate(`/`)}>Landing</button>
        <button onClick={() => navigate(`/create`)}>Create</button>
      </div>

      {isOpen
        ? createPortal(
            <div className={style.overlay}>
              <div className={style.select}>
                <button onClick={() => setIsOpen(false)}>
                  Close Filter Select
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
