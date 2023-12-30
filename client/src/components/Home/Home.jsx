import style from "./Home.module.css";

import Search from "../Search/Search";
import Rack from "../Rack/Rack";
import Pages from "../Pages/Pages";
import { getVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  const visibleVideogames = videogames
    ? videogames.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : [];

  useEffect(() => {
    dispatch(getVideogames());
    //    return () => {clearDetail();};
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Search />
      <Rack videogames={visibleVideogames} />
      <Pages />
    </div>
  );
}

export default Home;
