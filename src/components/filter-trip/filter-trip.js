import { useSelector } from 'react-redux';

import Trip from '../trip/trip';

import classes from './filter-trip.module.scss';

function FilterTrip() {
  const filter = useSelector((state) => {
    const { filterTrip } = state.filterTrip;
    return filterTrip;
  });
  const elems = filter.map((el) => (
    <Trip
      key={el.id}
      item={el}
      className={`${classes.filterTrip} ${classes[`filterTrip-${el.id}`]}`}
    />
  ));

  return <div className={classes['filter-trip-button']}>{elems}</div>;
}

export default FilterTrip;
