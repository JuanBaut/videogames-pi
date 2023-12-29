/* eslint-disable react/prop-types */
import style from './Activity.module.css';

function Activity({ activity }) {
  const { name, difficulty, duration, season, CountryCode } = activity;

  return (
    <div className={style.activity}>
      <div>Name:{name}</div>
      <div>Difficulty:{difficulty}</div>
      <div>Duration:{duration}</div>
      <div>Season:{season}</div>
      <div>Country:{CountryCode}</div>
    </div>
  );
}

export default Activity;
