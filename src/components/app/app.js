import Header from '../header/header';
import FilterTransfer from '../filter-transfer/filter-transfer';
import FilterTrip from '../filter-trip/filter-trip';
import TicketsList from '../tickets-list/tickets-list';
import Uploader from '../upload/upload';

import classes from './app.module.scss';
console.log('test');
export default function App() {
  return (
    <section className={classes.aviasalesApp}>
      <Header />
      <Uploader />
      <section className={classes.main}>
        <FilterTransfer />
        <section className={classes.mainTrip}>
          <FilterTrip />
          <TicketsList />
        </section>
      </section>
    </section>
  );
}
