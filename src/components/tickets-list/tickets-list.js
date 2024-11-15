/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';

import Ticket from '../ticket/ticket';
import { fetchTickets } from '../../redux/actions';
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
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  let idSearch;
  let elems = null;

  function onError() {
    setError(true);
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
      })
      .catch(() => {
        onError();
      });
  }, []);

  let ticketsState = useSelector((state) => {
    const ticketInfo = state.fetchTicketId.ticket;
    return ticketInfo;
  });

  const selectedTransferState = useSelector((state) => {
    const { selected } = state.filterTransfer;
    return selected;
  });

  const filterTransferState = useSelector((state) => {
    const { filterTransfer } = state.filterTransfer;
    return filterTransfer;
  });

  const selectedTripState = useSelector((state) => {
    const { filterTrip } = state.filterTrip;
    return filterTrip;
  });

  const arrTripSelected = [];
  selectedTripState.map((el) => arrTripSelected.push(el.selected));

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
    return <Spin className={classes['error-indicator']} />;
  }

  if (ticketsState) {
    ticketsState = filtTR(filterTransferState, ticketsState);
    ticketsState = sortTR(arrTripSelected, ticketsState);
    ticketsState = ticketsState.slice(0, index);
    elems = ticketsState.map((el, idx) => {
      const keyValue = `ticket-${idx}`;
      return <Ticket key={keyValue} info={el} />;
    });
  }

  if (!selectedTransferState) {
    return (
      <div className={classes['error-indicator']}>
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      </div>
    );
  }

  if (elems) {
    return (
      <div className={classes['ticket-list']}>
        {elems}
        <button
          type="button"
          className={classes['ticketsList-button']}
          onClick={hadlerClick}
        >
          Показать еще 5 билетов!
        </button>
      </div>
    );
  }
  return <Spin />;
}

export default TicketsList;
