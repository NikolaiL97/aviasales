import { createRoot } from 'react-dom/client';
import {
  configureStore,
  compose,
  applyMiddleware,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './redux/root-reducer';
import App from './components/app/app';

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunkMiddleware)
);

const container = document.getElementById('root');
const body = createRoot(container);

body.render(
  <Provider store={store}>
    <App />
  </Provider>
);
