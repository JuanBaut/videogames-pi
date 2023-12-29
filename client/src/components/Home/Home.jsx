import style from './Home.module.css';

import SearchBar from '../SearchBar/SearchBar';
import CardGrid from '../CardGrid/CardGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [filter, setFilter] = useState(countries);
  const [searchCode, setSearchCode] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchCode(e.target.value);
  };

  const handleSubmit = () => {
    const filtered = countries.filter((country) =>
      country.code.includes(searchCode)
    );
    setFilter(filtered);
  };

  useEffect(() => {
    dispatch(getCountries());
    //    return () => {clearDetail();};
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CardGrid countries={countries} />
    </div>
  );
}

export default Home;
