import { useDispatch } from 'react-redux';

import { onSelectFilterTrip } from '../../redux/actions';

import classes from './trip.module.scss';

function Trip(props) {
  const dispatch = useDispatch();
  const { label, id, selected } = props.item;

  const clickFn = () => {
    dispatch(onSelectFilterTrip(id));
  };

  return (
    <button
      onClick={clickFn}
      type="button"
      className={
        selected
          ? `${classes.focusClass} ${classes.filterTrip} ${classes[`filterTrip-${id}`]}`
          : `${classes.filterTrip} ${classes[`filterTrip-${id}`]}`
      }
    >
      {label}
    </button>
  );
}

export default Trip;
