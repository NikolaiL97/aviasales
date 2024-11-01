import logoS7 from '../../images/S7 Logo.svg';

import classes from './ticket.module.scss';

function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-cost']}>13400</div>
        <img src={logoS7} alt="logo company" />
      </div>
      <div>
        <div>Рейс туда</div>
        <div>Рейс обратно</div>
      </div>
    </div>
  );
}

export default Ticket;
