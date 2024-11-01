import Ticket from '../ticket/ticket';

import classes from './tickets-list.module.scss';

function TicketsList() {
  return (
    <div className={classes['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button type="button" className={classes['ticketsList-button']}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

export default TicketsList;
