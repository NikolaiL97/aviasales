export function filtTR(arr, ticketsState) {
  if (!arr[4].selected) {
    ticketsState = ticketsState.filter((el) => {
      const stopsOne = el.segments[0].stops.length;
      const stopsTwo = el.segments[1].stops.length;
      if (stopsOne === 3 || stopsTwo === 3) {
        return false;
      }
      return true;
    });
  }
  if (!arr[3].selected) {
    ticketsState = ticketsState.filter((el) => {
      const stopsOne = el.segments[0].stops.length;
      const stopsTwo = el.segments[1].stops.length;
      if (stopsOne === 2 || stopsTwo === 2) {
        return false;
      }
      return true;
    });
  }
  if (!arr[2].selected) {
    ticketsState = ticketsState.filter((el) => {
      const stopsOne = el.segments[0].stops.length;
      const stopsTwo = el.segments[1].stops.length;
      if (stopsOne === 1 || stopsTwo === 1) {
        return false;
      }
      return true;
    });
  }
  if (!arr[1].selected) {
    ticketsState = ticketsState.filter((el) => {
      const stopsOne = el.segments[0].stops.length;
      const stopsTwo = el.segments[1].stops.length;
      if (!stopsOne || !stopsTwo) {
        return false;
      }
      return true;
    });
  }
  return ticketsState;
}

export function sortTR(arrTripSelected, ticketsState) {
  if (arrTripSelected[1]) {
    ticketsState = [...ticketsState].sort((a, b) => {
      const aSumDur = a.segments[0].duration + a.segments[1].duration;
      const bSumDur = b.segments[0].duration + b.segments[1].duration;
      return aSumDur - bSumDur;
    });
  } else if (arrTripSelected[0]) {
    ticketsState = [...ticketsState].sort((a, b) => a.price - b.price);
  }
  return ticketsState;
}
