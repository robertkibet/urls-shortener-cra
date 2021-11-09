/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './Redux/store';

const { store, persistor } = configureStore();

interface MapStateInterface {
  data: any;
  loading: boolean;
  error: any;
}
const mapStateToProps: (state: any) => MapStateInterface = (state: any) => ({
  data: state.form.data,
  loading: state.form.loading,
  error: state.form.error,
});

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
