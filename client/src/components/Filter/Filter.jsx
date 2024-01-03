import style from "./Filter.module.css";
import { filterVideogames } from "../../redux/actions/filterVideogames";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../redux/actions/clearFilter";

export default function Filter({ onClose, open }) {
  const genres = useSelector((state) => state.genres);

  const dispatch = useDispatch();

  const handlerFilter = (filter) => {
    dispatch(filterVideogames(filter));
  };

  const handleClear = () => {
    dispatch(clearFilter());
  };

  if (!open) return null;
  return (
    <>
      <div className={style.overlay}>
        <div className={style.select}>
          <button onClick={onClose}>X</button>
          <button onClick={() => handleClear()}>Clear Filter</button>
          <hr />
          <div className={style.genres}>
            {genres?.map((genre) => (
              <button onClick={() => handlerFilter(genre.id)} key={genre.id}>
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
