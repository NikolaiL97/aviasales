import classes from './filter-trip.module.scss';

function FilterTrip() {
  return (
    <div className={classes['filter-trip-button']}>
      <button
        type="button"
        className={`${classes.filterTrip} ${classes['filterTrip-cheap']}`}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`${classes.filterTrip} ${classes['filterTrip-quiqly']}`}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={`${classes.filterTrip} ${classes['filterTrip-optimal']}`}
      >
        Оптимальный
      </button>
    </div>
  );
}
export default FilterTrip;
