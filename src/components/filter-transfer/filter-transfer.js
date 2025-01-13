import Transfer from '../transfer/transfer';
import UseStore from '../utilits';

import classes from './filter-transfer.module.scss';

function FilterTransfer() {
  const { filterTransfer } = UseStore();

  const elems = filterTransfer.map((el) => <Transfer key={el.id} item={el} />);

  return (
    <div className={classes.filterTransfer}>
      <div className={classes.title}>
        <p>Количество пересадок</p>
      </div>
      {elems}
    </div>
  );
}

export default FilterTransfer;
