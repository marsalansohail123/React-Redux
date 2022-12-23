import React from 'react'
import AppRouter from './config/router/AppRouter';
import { Provider } from 'react-redux';
import store from './config/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}

export default App;