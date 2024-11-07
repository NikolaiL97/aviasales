import { useDispatch } from 'react-redux';

import { onSelectFilterTrip } from '../../redux/actions';

import classes from './trip.module.scss';

function Trip(props) {
  const dispatch = useDispatch();

  const { label, id, selected } = props.item;

  let focusClass = '';
  if (selected) {
    focusClass = classes['focus-class'];
  }

  const clickFn = () => {
    dispatch(onSelectFilterTrip(id));
  };
  return (
    <button
      onClick={clickFn}
      type="button"
      className={`${focusClass} ${classes.filterTrip} ${classes[`filterTrip-${id}`]}`}
    >
      {label}
    </button>
  );
}

export default Trip;
