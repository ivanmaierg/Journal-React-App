import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/store';

const JournalApp = () => {
  console.log('hey');
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default JournalApp;
