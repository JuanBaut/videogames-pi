import style from "./Home.module.css";

import Search from "../Search/Search";
import Rack from "../Rack/Rack";
import { getVideogames, setCurrentPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const { videogames, currentPage, itemsPerPage, totalVideogames } =
    useSelector((state) => state.videogames);

  const [filter, setFilter] = useState(videogames);
  const [searchId, setSearchId] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchId(e.target.value);
  };

  const handleSubmit = () => {
    const filtered = videogames.filter((videogame) =>
      videogame.id.includes(searchId),
    );
    setFilter(filtered);
  };

  useEffect(() => {
    dispatch(getVideogames());
    //    return () => {clearDetail();};
  }, [dispatch]);

  const visibleVideogames = videogames
    ? videogames.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : [];

  const pageCount = Math.ceil(totalVideogames / itemsPerPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const nextPage = () => {
    if (!isLastPage) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const previousPage = () => {
    if (!isFirstPage) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className={style.container}>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
      <Rack videogames={videogames} />
      <div className={style.pages}>
        <button onClick={previousPage}>Previous</button>
        <div className={style.counter}>
          <h5>{pageCount}</h5>
        </div>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default Home;
