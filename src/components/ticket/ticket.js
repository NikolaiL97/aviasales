import InfoTrip from '../info-trip/info-trip';

import classes from './ticket.module.scss';

function Ticket(props) {
  const { price, carrier, segments } = props.info;
  const carrierImg = `https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${carrier}`;
  const elems = segments.map((el, idx) => {
    const key = `infoTrip-${idx}`;
    console.log(el);
    return <InfoTrip key={key} info={el} />;
  });
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-cost']}>{price}</div>
        <img src={carrierImg} alt="logo company" />
      </div>
      <div>{elems}</div>
    </div>
  );
}

export default Ticket;
