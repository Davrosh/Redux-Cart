import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";


import fetchSaga from './fetchSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store 

// to be able to use redux devtools extension
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// then run the saga
sagaMiddleware.run(fetchSaga);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
