import {
  ON_SELECT_FILTER_TRIP,
  ON_SELECT_FILTER_TRANSFER,
  FETCH_TICKET_ID,
  FETCH_TICKETS,
  ERROR_TICKETS,
  STOP_TICKETS,
} from './types';

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

export function errorTickets() {
  return {
    type: ERROR_TICKETS,
  };
}

export function stopTickets() {
  return {
    type: STOP_TICKETS,
  };
}
