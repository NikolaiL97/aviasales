export async function fetchTicketSearch() {
  const res = await fetch('https://aviasales-test-api.kata.academy/search');
  const data = await res.json();
  return data;
}

export async function fetchTicket(searchId) {
  let counter = 0;
  let res = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );
  if (!res.ok) {
    while (counter < 3) {
      counter++;
      // eslint-disable-next-line no-await-in-loop
      res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      if (res.ok) {
        counter = 0;
        break;
      }
    }
  }

  if (!res.ok) {
    throw new Error('WOOOW');
  }

  const data = await res.json();
  return data;
}

export async function ticketApiService(id) {
  let stop = false;
  const arrTicket = [];
  while (!stop) {
    // eslint-disable-next-line no-await-in-loop
    const ticketsInfo = await fetchTicket(id);
    if (ticketsInfo.stop) {
      stop = true;
      break;
    }
    if (!stop && ticketsInfo.tickets) {
      arrTicket.push(ticketsInfo.tickets);
    }
  }
  let arr = [];
  arrTicket.map((el) => (arr = arr.concat(el)));
  return arr;
}
