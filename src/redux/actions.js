import {
  ON_SELECT_FILTER_TRIP,
  ON_SELECT_FILTER_TRANSFER,
  FETCH_TICKET_ID,
  FETCH_TICKETS,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export function onSelectFilterTrip(id) {
  return {
    type: ON_SELECT_FILTER_TRIP,
    id,
  };
}

export function onSelectFilterTransfer(id) {
  return {
    type: ON_SELECT_FILTER_TRANSFER,
    id,
  };
}

export function fetchTicketId(searchId) {
  return {
    type: FETCH_TICKET_ID,
    searchId,
  };
}

export function fetchTickets(tickets) {
  return {
    type: FETCH_TICKETS,
    tickets,
  };
}
