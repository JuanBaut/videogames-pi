/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountriesCode } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

import style from './Detail.module.css';

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const { code } = useParams();

  useEffect(() => {
    dispatch(getCountriesCode(code));
  }, [dispatch, code]);

  return (
    <div className={style.container}>
      <img
        src={country.flag}
        alt='flag.png'
        className={style.image}
      />
      <h2>{country.name}</h2>
      <div>Region:{country.region}</div>
      <div>Capital:{country.capital}</div>
      <div>Population:{country.population}</div>
      <div>Code:{country.code}</div>
      <button
        onClick={() => navigate(`/home`)}
        className={style.button}
      >
        Go back
      </button>
    </div>
  );
}

export default Detail;
