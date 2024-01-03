import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ videogame }) {
  const navigate = useNavigate();

  const { id, name, background_image } = videogame;

  return (
    <div className={style.card} onClick={() => navigate(`/detail/${id}`)}>
      <img src={background_image} alt="image.png" className={style.image} />
      <p className={style.text}>{name}</p>
    </div>
  );
}
