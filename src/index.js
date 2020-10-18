import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDvo4Je1g1TC1Xgt6iuf2HL5ya8A-3R8kw",
  authDomain: "kolik-50a2d.firebaseapp.com",
  databaseURL: "https://kolik-50a2d.firebaseio.com",
  projectId: "kolik-50a2d",
  storageBucket: "kolik-50a2d.appspot.com",
  messagingSenderId: "238880769541",
  appId: "1:238880769541:web:53e5f36301c88b4800fe6c"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
