import { ON_SELECT_FILTER_TRIP, ON_SELECT_FILTER_TRANSFER } from './types';

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
