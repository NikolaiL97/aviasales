import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import { rootReducer } from './redux/root-reducer';
import App from './components/app/app';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

const container = document.getElementById('root');
const body = createRoot(container);

body.render(
  <Provider store={store}>
    <App />
  </Provider>
);
