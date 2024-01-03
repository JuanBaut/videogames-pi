import style from "./Landing.module.css";
import image from "../../assets/videogames.webp";

import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.block}>
        <img className={style.image} src={image} alt="console images" />
        <h3>App de videojuegos</h3>
        <hr></hr>
        <h5>Hecho por Juan Bautista</h5>
      </div>
      <button className={style.button} onClick={() => navigate(`/home`)}>
        Ver videojuegos
      </button>
    </div>
  );
}
