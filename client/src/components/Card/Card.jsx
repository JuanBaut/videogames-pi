/* eslint-disable react/prop-types */
import style from './Card.module.css';

import { useNavigate } from 'react-router-dom';

function Card({ country }) {
  const navigate = useNavigate();

  const { code, name, flag, region } = country;

  return (
    <div
      className={style.card}
      onClick={() => navigate(`/detail/${code}`)}
    >
      <img
        src={flag}
        alt='flag.png'
        className={style.image}
      />
      <div>Name:{name}</div>
      <div>Region:{region}</div>
    </div>
  );
}

export default Card;
