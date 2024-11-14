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
import ErrorIndicator from '../../services/error-indicator';

import classes from './tickets-list.module.scss';

function TicketsList() {
  const [index, setIndex] = useState(5);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  let idSearch;

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

  let elems = null;

  if (ticketsState) {
    if (!filterTransferState[4].selected) {
      ticketsState = ticketsState.filter((el) => {
        const stopsOne = el.segments[0].stops.length;
        const stopsTwo = el.segments[1].stops.length;
        if (stopsOne === 3 || stopsTwo === 3) {
          return false;
        }
        return true;
      });
    }
    if (!filterTransferState[3].selected) {
      ticketsState = ticketsState.filter((el) => {
        const stopsOne = el.segments[0].stops.length;
        const stopsTwo = el.segments[1].stops.length;
        if (stopsOne === 2 || stopsTwo === 2) {
          return false;
        }
        return true;
      });
    }
    if (!filterTransferState[2].selected) {
      ticketsState = ticketsState.filter((el) => {
        const stopsOne = el.segments[0].stops.length;
        const stopsTwo = el.segments[1].stops.length;
        if (stopsOne === 1 || stopsTwo === 1) {
          return false;
        }
        return true;
      });
    }
    if (!filterTransferState[1].selected) {
      ticketsState = ticketsState.filter((el) => {
        const stopsOne = el.segments[0].stops.length;
        const stopsTwo = el.segments[1].stops.length;
        if (!stopsOne || !stopsTwo) {
          return false;
        }
        return true;
      });
    }
    if (arrTripSelected[1]) {
      ticketsState = [...ticketsState].sort((a, b) => {
        const aSumDur = a.segments[0].duration + a.segments[1].duration;
        const bSumDur = b.segments[0].duration + b.segments[1].duration;
        return aSumDur - bSumDur;
      });
    } else if (arrTripSelected[0]) {
      ticketsState = [...ticketsState].sort((a, b) => a.price - b.price);
    }
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
