import Card from "../Card/Card";
import style from "./Rack.module.css";

function Rack({ videogames }) {
  const data = videogames;
  return (
    <div className={style.container}>
      {data?.map((videogame) => (
        <Card videogame={videogame} key={videogame.id} />
      ))}
    </div>
  );
}

export default Rack;
