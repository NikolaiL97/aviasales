export function filtTR(arr, ticketsState) {
  arr = arr.filter((el) => el.selected).map((el) => el.stop);
  ticketsState = ticketsState.filter((el) => {
    const T2 = [el.segments[0].stops.length, el.segments[1].stops.length];
    const NOV = [];
    let ticket = false;
    T2.map((elem) => {
      const tr = arr.filter((item) => item === elem);
      if (tr.length > 0) {
        NOV.push(tr);
      }
      return (ticket = NOV.length === T2.length);
    });

    return ticket;
  });
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
