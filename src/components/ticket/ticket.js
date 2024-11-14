import InfoTrip from '../info-trip/info-trip';

import classes from './ticket.module.scss';

function Ticket(props) {
  const { carrier, segments } = props.info;
  let { price } = props.info;
  const carrierImg = `https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${carrier}`;
  const elems = segments.map((el, idx) => {
    const key = `infoTrip-${idx}`;
    return <InfoTrip key={key} info={el} />;
  });

  function spaceDigits(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }

  price = spaceDigits(price);
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket-info']}>
        <div className={classes['ticket-cost']}>{price} Р</div>
        <img src={carrierImg} alt="logo company" />
      </div>
      <div>{elems}</div>
    </div>
  );
}

export default Ticket;
