/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useDispatch } from 'react-redux';

import { onSelectFilterTransfer } from '../../redux/actions';

import classes from './transfer.module.scss';

function Transfer(props) {
  const dispatch = useDispatch();
  const { label, id, selected } = props.item;

  let checkboxFocus = '';
  if (selected) {
    checkboxFocus = classes['checkbox-focus'];
  }

  function handlerClick(e) {
    e.preventDefault();
    dispatch(onSelectFilterTransfer(id));
  }

  return (
    <div onClick={handlerClick}>
      <label className={`${checkboxFocus} ${classes.checkbox}`}>
        <input
          type="checkbox"
          name="all"
          className={classes['real-checkbox']}
        />
        <span className={` ${classes['custom-checkbox']}`}> </span>
        <p>{label}</p>
      </label>
    </div>
  );
}

export default Transfer;
