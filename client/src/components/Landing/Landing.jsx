import style from './Landing.module.css';

import { useNavigate } from 'react-router-dom';
import world from './world.png';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.paper}>
        <h4>Stack: React, Redux, Express, Node, Sequalize.</h4>
        <h4>
          The app lets you browse countries, view detailed information about
          them, and create touristic activities. It is easy to use, responsive,
          scalable, and secure.
        </h4>
      </div>
      <button
        className={style.button}
        onClick={() => navigate(`/home`)}
      >
        Start looking for countries
      </button>
      <img
        className={style.img}
        src={world}
        alt='A world map image'
      />
    </div>
  );
}

export default Landing;
