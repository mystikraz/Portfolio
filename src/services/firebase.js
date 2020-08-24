import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFoMF2yY9xhA23lQiufO4_9GLfB1hcJBg",
    authDomain: "portfolio-282ef.firebaseapp.com",
    databaseURL: "https://portfolio-282ef.firebaseio.com",
    projectId: "portfolio-282ef",
    storageBucket: "portfolio-282ef.appspot.com",
    messagingSenderId: "654564933286",
    appId: "1:654564933286:web:5fcd69924b4a1965243e67",
    measurementId: "G-LD7HJ7Q6M4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
