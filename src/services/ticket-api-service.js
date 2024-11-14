export async function fetchTicketSearch() {
  const res = await fetch('https://aviasales-test-api.kata.academy/search');
  const data = await res.json();
  return data;
}

export async function fetchTicket(searchId) {
  let res = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );
  if (!res.ok) {
    res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
  }
  if (!res.ok) {
    res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
  }
  if (!res.ok) {
    res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
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
  const arr = [];
  arrTicket.forEach((el) => {
    el.forEach((item) => {
      arr.push(item);
    });
  });
  return arr;
}
