import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Spin } from 'antd';

import Ticket from '../ticket/ticket';
import { fetchTicketId, fetchTickets } from '../../redux/actions';

import classes from './tickets-list.module.scss';

function TicketsList() {
  const dispatch = useDispatch();

  async function fetchTicketSearch() {
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    const data = await res.json();
    return data;
  }

  async function fetchTicket(searchId) {
    const res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    const data = await res.json();
    return data;
  }

  const getTicketThunk = () => {
    fetchTicketSearch()
      .then((data) => {
        const tickets = fetchTicket(data.searchId);
        dispatch(fetchTicketId(data.searchId));
        return tickets;
      })
      .then((data) => {
        dispatch(fetchTickets(data));
      });
  };

  useEffect(() => {
    getTicketThunk();
  }, []);

  const ticketsState = useSelector((state) => {
    const ticketInfo = state.fetchTicketId.ticket;
    return ticketInfo;
  });

  let elems = <Spin />;
  if (ticketsState) {
    let minKey = 10;
    elems = ticketsState.map((el, idx) => {
      if (idx <= 4) {
        minKey += 1;
        return <Ticket key={minKey} info={el} />;
      }
    });
  }

  return (
    <div className={classes['ticket-list']}>
      {elems}
      <button
        type="button"
        className={classes['ticketsList-button']}
        onClick={getTicketThunk}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

export default TicketsList;
