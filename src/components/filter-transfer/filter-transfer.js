import classes from './filter-transfer.module.scss';

function FilterTransfer() {
  return (
    <div className={classes['filter-transfer']}>
      <div className={classes.title}>
        <p>Количество пересадок</p>
      </div>
      <div>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            name="all"
            className={classes['real-checkbox']}
          />
          <span className={classes['custom-checkbox']}> </span>
          <p>Все</p>
        </label>
      </div>
      <div>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            name="all"
            className={classes['real-checkbox']}
          />
          <span className={classes['custom-checkbox']}> </span>
          <p>Без пересадок</p>
        </label>
      </div>
      <div>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            name="all"
            className={classes['real-checkbox']}
          />
          <span className={classes['custom-checkbox']}> </span>
          <p>1 пересадка</p>
        </label>
      </div>
      <div>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            name="all"
            className={classes['real-checkbox']}
          />
          <span className={classes['custom-checkbox']}> </span>
          <p>2 пересадки</p>
        </label>
      </div>
      <div>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            name="all"
            className={classes['real-checkbox']}
          />
          <span className={classes['custom-checkbox']}> </span>
          <p>3 пересадки</p>
        </label>
      </div>
    </div>
  );
}
export default FilterTransfer;
