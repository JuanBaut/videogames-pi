import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ videogames }) {
  const data = videogames;
  return (
    <div className={style.container}>
      {data?.map((videogame) => (
        <Card videogame={videogame} key={videogame.id} />
      ))}
    </div>
  );
}
