import { useSelector } from 'react-redux';

import Transfer from '../transfer/transfer';

import classes from './filter-transfer.module.scss';

function FilterTransfer() {
  const filter = useSelector((state) => {
    const { filterTransfer } = state.filterTransfer;
    return filterTransfer;
  });

  const elems = filter.map((el) => <Transfer key={el.id} item={el} />);

  return (
    <div className={classes['filter-transfer']}>
      <div className={classes.title}>
        <p>Количество пересадок</p>
      </div>
      {elems}
    </div>
  );
}

export default FilterTransfer;
