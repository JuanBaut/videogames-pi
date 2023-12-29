/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import style from './CardGrid.module.css';

function CardGrid({ countries }) {
  const countryList = countries;
  return (
    <div className={style.container}>
      {countryList?.map((country) => (
        <Card
          country={country}
          key={country.code}
        />
      ))}
    </div>
  );
}

export default CardGrid;
