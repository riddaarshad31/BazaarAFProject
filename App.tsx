import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import AppContainer from './src/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
