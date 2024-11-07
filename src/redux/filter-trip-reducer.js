import { ON_SELECT_FILTER_TRIP } from './types';

const initialState = {
  filterTrip: [
    { label: 'Самый дешевый', id: 1, selected: true },
    { label: 'Самый быстрый', id: 2, selected: false },
    { label: 'Оптимальный', id: 3, selected: false },
  ],
  oldSelected: 1,
};

// eslint-disable-next-line default-param-last, import/prefer-default-export
export const filterTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SELECT_FILTER_TRIP: {
      const { id } = action;
      const { filterTrip, oldSelected } = state;
      let newArr = filterTrip;

      if (oldSelected) {
        const idxOld = filterTrip.findIndex((el) => el.id === oldSelected);
        const oldFil = filterTrip[idxOld];
        const newFil = {
          ...oldFil,
          selected: false,
        };
        newArr = [
          ...filterTrip.slice(0, idxOld),
          newFil,
          ...filterTrip.slice(idxOld + 1),
        ];
      }

      const idx = newArr.findIndex((el) => el.id === id);
      const oldFilterTrip = newArr[idx];
      const newFilterTrip = {
        ...oldFilterTrip,
        selected: true,
      };
      newArr = [
        ...newArr.slice(0, idx),
        newFilterTrip,
        ...newArr.slice(idx + 1),
      ];
      return {
        ...state,
        filterTrip: newArr,
        oldSelected: id,
      };
    }

    default:
      return state;
  }
};
