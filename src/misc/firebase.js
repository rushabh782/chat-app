import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyABAMtr083esTJBK2vOvRSYkdXQt9MNVLs',
  authDomain: 'chat-web-app-dfcaa.firebaseapp.com',
  projectId: 'chat-web-app-dfcaa',
  storageBucket: 'chat-web-app-dfcaa.appspot.com',
  messagingSenderId: '96531847703',
  appId: '1:96531847703:web:d95bebe3b4aef25a941a52',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
