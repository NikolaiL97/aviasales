import { Component } from 'react';

import Header from '../header/header';
import FilterTransfer from '../filter-transfer/filter-transfer';
import FilterTrip from '../filter-trip/filter-trip';
import TicketsList from '../tickets-list/tickets-list';
import Uploader from '../upload/upload';

import classes from './app.module.scss';

export default class App extends Component {
  render() {
    return (
      <section className={classes['aviasales-app']}>
        <Header />
        <Uploader />
        <section className={classes.main}>
          <FilterTransfer />
          <section className={classes['main-trip']}>
            <FilterTrip />
            <TicketsList />
          </section>
        </section>
      </section>
    );
  }
}
