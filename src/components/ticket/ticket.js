import InfoTrip from '../info-trip/info-trip';

import classes from './ticket.module.scss';

function Ticket(props) {
  const { carrier, segments, price } = props.info;
  const carrierImg = `https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${carrier}`;
  const elems = segments.map((el, idx) => (
    <InfoTrip key={`infoTrip-${idx + 1}`} info={el} />
  ));

  function spaceDigits(number) {
    let string = number.toString();
    const arr = string
      .split('')
      .reverse()
      .map((el, idx) => {
        if ((idx + 1) % 3 === 0) {
          el = ` ${el}`;
        }
        return el;
      })
      .reverse();
    return (string = arr.join(''));
  }

  return (
    <div className={classes.ticket}>
      <div className={classes.ticketInfo}>
        <div className={classes.ticketCost}>{spaceDigits(price)} Р</div>
        <img src={carrierImg} alt="logo company" />
      </div>
      <div>{elems}</div>
    </div>
  );
}

export default Ticket;
