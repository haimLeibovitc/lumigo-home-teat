/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import rootReducer from './modules/reducers';
import AppModule from './modules/App';
import normalize from './theme/normalize';

const store = createStore(rootReducer, applyMiddleware(thunk));

const GlobalStyles = createGlobalStyle`
    ${normalize};
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppModule />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
