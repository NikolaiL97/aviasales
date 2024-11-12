import { combineReducers } from 'redux';

import { filterTripReducer } from './filter-trip-reducer';
import { filterTransferReducer } from './filter-transfer-reducer';
import { fetchTicketIdReduser } from './fetch-ticket-reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  filterTrip: filterTripReducer,
  filterTransfer: filterTransferReducer,
  fetchTicketId: fetchTicketIdReduser,
});
