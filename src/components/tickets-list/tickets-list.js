/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';

import UseStore from '../utilits';
import Ticket from '../ticket/ticket';
import { fetchTickets, errorTickets, stopTickets } from '../../redux/actions';
import {
  fetchTicket,
  fetchTicketSearch,
  ticketApiService,
} from '../../services/ticket-api-service';
import ErrorIndicator from '../error-indicator/error-indicator';

import { filtTR, sortTR } from './ticket-list-servis';
import classes from './tickets-list.module.scss';

function TicketsList() {
  const [index, setIndex] = useState(5);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const { selected, filterTransfer, filterTrip, error } = UseStore();
  let { ticket } = UseStore();

  let idSearch;
  let elems = null;

  function onError() {
    dispatch(errorTickets());
  }

  useEffect(() => {
    fetchTicketSearch()
      .then((id) => {
        idSearch = id.searchId;
        return fetchTicket(idSearch);
      })
      .then((body) => {
        dispatch(fetchTickets(body.tickets));
        setLoad(false);
      })
      .then(() => ticketApiService(idSearch))
      .then((body) => {
        dispatch(fetchTickets(body));
        dispatch(stopTickets());
      })
      .catch(() => {
        onError();
      });
  }, []);

  const arrTripSelected = filterTrip.map((el) => el.selected);

  const hadlerClick = () => {
    setIndex((i) => i + 5);
  };

  if (error) {
    return (
      <div>
        <ErrorIndicator />
      </div>
    );
  }

  if (load) {
    return <Spin className={classes.central} />;
  }

  if (ticket) {
    ticket = filtTR(filterTransfer, ticket);
    ticket = sortTR(arrTripSelected, ticket);
    ticket = ticket.slice(0, index);
    elems = ticket.map((el, idx) => (
      <Ticket key={`ticket-${idx + 1}`} info={el} />
    ));
  }

  if (!selected) {
    return (
      <div className={classes.central}>
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      </div>
    );
  }

  if (elems) {
    return (
      <div className={classes.ticketList}>
        {elems}
        <button
          type="button"
          className={classes.ticketsListButton}
          onClick={hadlerClick}
        >
          Показать еще 5 билетов!
        </button>
      </div>
    );
  }
}

export default TicketsList;
