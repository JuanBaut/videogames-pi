import style from "./Pages.module.css";
import { useState } from "react";
import { setCurrentPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Pages() {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const currentPage = useSelector((state) => state.currentPage);
  const totalVideogames = useSelector((state) => state.totalVideogames);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalVideogames / itemsPerPage));
  }, [totalVideogames, itemsPerPage]);

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
    <div className={style.pages}>
      <button onClick={previousPage}>Previous</button>
      <div className={style.counter}>
        <h5>{currentPage}</h5>
      </div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pages;
