import { useNavigate } from "react-router-dom";
import style from "./Create.module.css";

export default function Create() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.container}>
        <div className={style.bar}>
          <h4>Crear videojuego</h4>
          <button onClick={() => navigate(`/home`)}>Home page</button>
        </div>
        <form className={style.form}>
          <input className={style.input} placeholder="Nombre"></input>
          <input className={style.input} placeholder="Generos"></input>
          <input className={style.input} placeholder="Descripcion"></input>
          <button className={style.input}>Crear!</button>
        </form>
      </div>
    </>
  );
}
