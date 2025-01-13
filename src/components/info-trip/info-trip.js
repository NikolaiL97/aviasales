import { add, format, hoursToMinutes, minutesToHours } from 'date-fns';

import classes from './info-trip.module.scss';

type;

function InfoTrip(props) {
  const { origin, destination, duration } = props.info;
  let { date, stops } = props.info;
  let arrivalDate;
  if (date) {
    const newDate = new Date(date);
    date = format(newDate, 'HH:mm');
    arrivalDate = add(newDate, { minutes: duration });
    arrivalDate = format(arrivalDate, 'HH:mm');
  }

  const durationHours = minutesToHours(duration);
  const durationMinutes = duration - hoursToMinutes(durationHours);
  const timeTravel = `${durationHours}ч ${durationMinutes}м`;

  let stop = 'БЕЗ ПЕРЕСАДОК';

  switch (stops.length) {
    case 1:
      stop = '1 ПЕРЕСАДКА';
      break;
    case 2:
      stop = '2 ПЕРЕСАДКИ';
      break;
    case 3:
      stop = '3 ПЕРЕСАДКИ';
      break;
    default:
      break;
  }

  stops = stops.join(', ');

  return (
    <div className={classes.infoTrip}>
      <div>
        <div>
          <p>
            {origin} - {destination}
          </p>
        </div>
        <div>
          {date} - {arrivalDate}
        </div>
      </div>
      <div>
        <div>
          <p>В ПУТИ</p>
        </div>
        <div>{timeTravel}</div>
      </div>
      <div>
        <div>
          <p>{stop}</p>
        </div>
        <div>{stops}</div>
      </div>
    </div>
  );
}

export default InfoTrip;
