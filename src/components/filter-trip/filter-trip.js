import Trip from '../trip/trip';
import UseStore from '../utilits';

import classes from './filter-trip.module.scss';

function FilterTrip() {
  const { filterTrip } = UseStore();
  const elems = filterTrip.map((el) => (
    <Trip
      key={el.id}
      item={el}
      className={`${classes.filterTrip} ${classes[`filterTrip-${el.id}`]}`}
    />
  ));

  return <div className={classes.filterTripButton}>{elems}</div>;
}

export default FilterTrip;
