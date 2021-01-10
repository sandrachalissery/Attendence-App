import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQJLf5aMXP7-P2cVrGxCmI0WvunFNdrWk',
  authDomain: 'attendance-app-d53c1.firebaseapp.com',
  databaseURL: 'https://attendance-app-d53c1.firebaseio.com',
  projectId: 'attendance-app-d53c1',
  storageBucket: 'attendance-app-d53c1.appspot.com',
  messagingSenderId: '766546757175',
  appId: '1:766546757175:web:722b92265fab71ece1a1b2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
