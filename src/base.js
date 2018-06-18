import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMprlBAGK7B6O5bG4cWgm9IlCu7luVIu0",
  authDomain: "catch-of-the-day-kimhuor.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kimhuor.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
