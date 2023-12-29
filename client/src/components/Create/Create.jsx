import style from './Create.module.css';

import ActivityGrid from '../ActivityGrid/ActivityGrid';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getActivities } from '../../redux/actions';

function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleSubmit = () => {
  };

  return (
    <div>
      <div className={style.container}>
        <h2>Touristic Activities</h2>
        <form>
          <input
            className={style.input}
            placeholder='Name...'
          ></input>
          <input
            className={style.input}
            placeholder='Difficulty...'
          ></input>
          <input
            className={style.input}
            placeholder='Duration...'
          ></input>
          <input
            className={style.input}
            placeholder='Season...'
          ></input>
          <input
            className={style.input}
            placeholder='Country...'
          ></input>
          <button className={style.button}>Create Activity</button>
        </form>
        <button
          className={style.button}
          onClick={() => navigate(`/home`)}
        >
          Home
        </button>
      </div>
      <ActivityGrid activities={activities} />
    </div>
  );
}

export default Create;
