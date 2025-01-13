import { useSelector } from 'react-redux';

const UseStore = () =>
  useSelector((state) => {
    const { filterTransfer, selected } = state.filterTransfer;
    const { filterTrip } = state.filterTrip;
    const { ticket, error, stop } = state.fetchTicketId;
    return { filterTransfer, selected, filterTrip, ticket, error, stop };
  });

export default UseStore;
