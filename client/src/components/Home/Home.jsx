import style from "./Home.module.css";

import Cards from "../Cards/Cards";
import Pages from "../Pages/Pages";
import Search from "../Search/Search";
import { getVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const visibleVideogames = videogames
    ? videogames.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : [];

  return (
    <div className={style.container}>
      <Search/>
      <Cards videogames={visibleVideogames} />
      <Pages />
    </div>
  );
}

export default Home;
