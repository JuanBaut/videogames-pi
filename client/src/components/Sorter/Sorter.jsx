import style from "./Order.module.css";
import { useSelector } from "react-redux";

export default function Order({ onClose, open }) {
  const genres = useSelector((state) => state.genres);

  if (!open) return null;
  return (
    <>
      <div className={style.overlay}>
        <div className={style.select}>
          <button onClick={onClose}>Close Order Select</button>
          <div className={style.genres}>
            {genres?.map((genre) => (
              <button genre={genre} key={genre.id}>
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
