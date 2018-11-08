// import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import store from './store';

import { firebase } from './firebase/firebase'
// import firebase from './firebase/firebase';
// import * as auth from 'firebase/auth';

import moment from 'moment';
import 'moment/locale/en-au';
moment.locale('en-au');

// signin firebase
let firebaseAuthenticated = false;
const firebaseToken = localStorage.getItem('firebaseToken');
if (!firebaseAuthenticated && firebaseToken) {
  firebase.auth().signInWithCustomToken(firebaseToken)
  // firebase.auth().signInWithCustomToken(firebaseToken)
    .then(() => {
      firebaseAuthenticated = true;
    })
    .catch(error => {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log('firebase auth error', errorCode, errorMessage);
    });
}

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(JSX, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
