import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


    const firebaseConfig = {
        apiKey: "AIzaSyAwekOmsUZHyxRw67YuV00e9D6lCEnFZOs",
        authDomain: "fir-d573c.firebaseapp.com",
        databaseURL: "https://fir-d573c-default-rtdb.firebaseio.com",
        projectId: "fir-d573c",
        storageBucket: "fir-d573c.appspot.com",
        messagingSenderId: "56356549192",
        appId: "1:56356549192:web:1ccc73dc76050b5bd71e7d"
      };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
