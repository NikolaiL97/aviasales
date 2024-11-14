import { FETCH_TICKET_ID, FETCH_TICKETS } from './types';

const initialState = {
  searchId: null,
  ticket: [],
};

// eslint-disable-next-line default-param-last, import/prefer-default-export
export const fetchTicketIdReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKET_ID:
      return {
        ...state,
        searchId: action.searchId,
      };

    case FETCH_TICKETS:
      return {
        ...state,
        ticket: action.tickets,
      };

    default:
      return state;
  }
};
