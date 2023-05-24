import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJfilpT4b3sFZ17tOaf2LteruPxpEgmZE",
  authDomain: "fir-pro-543d5.firebaseapp.com",
  databaseURL: "https://fir-pro-543d5-default-rtdb.firebaseio.com",
  projectId: "fir-pro-543d5",
  storageBucket: "fir-pro-543d5.appspot.com",
  messagingSenderId: "356557061560",
  appId: "1:356557061560:web:34d10ea110648bdb9d234d",
  measurementId: "G-8B0QSZ2WL8"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);

export { fireDb };