import style from "./Home.module.css";

import Cards from "../Cards/Cards";
import Pages from "../Pages/Pages";
import Search from "../Search/Search";
import { getVideogames } from "../../redux/actions/getVideogames";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectVisibleVideogames } from "../../redux/selectors";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const visibleVideogames = useSelector(selectVisibleVideogames);

  return (
    <div className={style.container}>
      <Search />
      <Pages />
      <Cards videogames={visibleVideogames} />
    </div>
  );
}

export default Home;
