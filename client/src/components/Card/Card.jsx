import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ videogame }) {
  const navigate = useNavigate();

  const { id, name, imageUrl } = videogame;

  return (
    <div className={style.card} onClick={() => navigate(`/detail/${id}`)}>
      <img src={imageUrl} alt="image.png" className={style.image} />
      <p className={style.text}>{name}</p>
    </div>
  );
}

export default Card;
