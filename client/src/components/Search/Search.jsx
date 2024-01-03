import style from "./Search.module.css";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../../redux/actions/onSearch";
import { setCurrentPage } from "../../redux/actions/setCurrentPage";
import { getVideogames } from "../../redux/actions/getVideogames";
import { getGenres } from "../../redux/actions/getGenres";
import Filter from "../Filter/Filter";
import { orderVideogames } from "../../redux/actions/orderVideogames";

export default function Search() {
  const totalVideogames = useSelector((state) => state.totalVideogames);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //const [isSorted, setIsSorted] = useState(false);

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

  const handlePortal = () => {
    setIsOpen(true);
    dispatch(getGenres());
  };

  const handlerOrder = (order) => {
    dispatch(orderVideogames(order));
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            placeholder="Search videogames..."
          />
          <button type="submit">Search</button>
        </form>
        <button onClick={handleReset}>Reset</button>
        <h6>Total videogames: {totalVideogames}</h6>
      </div>
      <div className={style.right}>
        <button onClick={() => handlerOrder("A")}>Sort</button>
        <button onClick={handlePortal}>Filter</button>
        <button onClick={() => navigate(`/create`)}>Create</button>
        <button onClick={() => navigate(`/`)}>Landing</button>
      </div>
      {createPortal(
        <Filter open={isOpen} onClose={() => setIsOpen(false)} />,
        document.body,
      )}
    </div>
  );
}
