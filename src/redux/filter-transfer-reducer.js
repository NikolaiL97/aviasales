import { ON_SELECT_FILTER_TRANSFER } from './types';

const initialState = {
  filterTransfer: [
    { label: 'Все', id: 4, selected: false },
    { label: 'Без пересадок', id: 5, selected: false },
    { label: '1 пересадка', id: 6, selected: false },
    { label: '2 пересадки', id: 7, selected: false },
    { label: '3 пересадки', id: 8, selected: false },
  ],
};

// eslint-disable-next-line default-param-last, import/prefer-default-export
export const filterTransferReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SELECT_FILTER_TRANSFER: {
      const { id } = action;
      let { filterTransfer } = state;
      const idx = filterTransfer.findIndex((el) => el.id === id);
      const oldFilterTransfer = filterTransfer[idx];
      if (oldFilterTransfer.id === 4) {
        if (oldFilterTransfer.selected) {
          const newArr = filterTransfer.map(
            (el) =>
              (el = {
                ...el,
                selected: false,
              })
          );
          filterTransfer = newArr;
        } else {
          const newArr = filterTransfer.map(
            (el) =>
              (el = {
                ...el,
                selected: true,
              })
          );
          filterTransfer = newArr;
        }
      } else {
        const newFilterTransfer = {
          ...oldFilterTransfer,
          selected: !oldFilterTransfer.selected,
        };

        filterTransfer = [
          ...filterTransfer.slice(0, idx),
          newFilterTransfer,
          ...filterTransfer.slice(idx + 1),
        ];

        if (filterTransfer[0].selected && !newFilterTransfer.selected) {
          let allfilterTransfer = filterTransfer[0];
          allfilterTransfer = {
            ...allfilterTransfer,
            selected: false,
          };
          filterTransfer[0] = allfilterTransfer;
        }
      }
      if (!filterTransfer[0].selected) {
        let sum = 0;
        filterTransfer.map((el) => {
          if (el.id !== 4) {
            if (!el.selected) {
              sum += 1;
            }
          }
          return sum;
        });
        if (!sum) {
          let allfilterTransfer = filterTransfer[0];
          allfilterTransfer = {
            ...allfilterTransfer,
            selected: true,
          };
          filterTransfer[0] = allfilterTransfer;
        }
      }
      return {
        ...state,
        filterTransfer,
      };
    }

    default:
      return state;
  }
};
