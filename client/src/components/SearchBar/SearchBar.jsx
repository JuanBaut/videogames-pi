import style from './SearchBar.module.css';

import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <form>
        <input
          className={style.input}
          placeholder='Search...'
        ></input>
        <button className={style.button}>Find it!</button>
      </form>
      <button
        onClick={() => navigate(`/`)}
        className={style.button}
      >
        Landing Page
      </button>
      <button
        onClick={() => navigate(`/activity`)}
        className={style.button}
      >
        Create Activity
      </button>
    </div>
  );
}

export default SearchBar;
