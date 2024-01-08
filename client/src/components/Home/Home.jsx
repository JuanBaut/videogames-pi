import style from "./Home.module.css";
import Cards from "../Cards/Cards";
import Pages from "../Pages/Pages";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectVisibleVideogames } from "../../redux/selectors";
import { clearDetail } from "../../redux/actions/clearDetail";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDetail());
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
