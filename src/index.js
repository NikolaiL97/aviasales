import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

import { rootReducer } from './redux/root-reducer';
import App from './components/app/app';

const store = configureStore({ reducer: rootReducer });

const container = document.getElementById('root');
const body = createRoot(container);

body.render(
  <Provider store={store}>
    <App />
  </Provider>
);
