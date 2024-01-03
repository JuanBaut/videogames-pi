import { useNavigate } from "react-router-dom";
import style from "./Create.module.css";

export default function Create() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.container}>
        <div className={style.bar}>
          <h4>Create videogame</h4>
          <button onClick={() => navigate(`/home`)}>Home page</button>
        </div>
        <form className={style.form}>
          <input className={style.input} placeholder="Name" />
          <input className={style.input} placeholder="Description" />
          <input className={style.input} placeholder="Platforms" />
          <input className={style.input} placeholder="Image URL" />
          <input className={style.input} placeholder="Release Date" />
          <input className={style.input} placeholder="Genres" />
          <button className={style.input}>Create!</button>
        </form>
      </div>
    </>
  );
}
