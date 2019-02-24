import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBh-GmQKV1Af3DJN0vK8ARrnnnV6bopfVk",
    authDomain: "myquotesapp-d7a24.firebaseapp.com",
    databaseURL: "https://myquotesapp-d7a24.firebaseio.com",
    projectId: "myquotesapp-d7a24",
    storageBucket: "myquotesapp-d7a24.appspot.com",
    messagingSenderId: "241726000418"
  };

  const fire = firebase.initializeApp(config);
  
  export default fire;