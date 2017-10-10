import * as firebase from "firebase";
import moment from "moment";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDXHR93nQAatzt0M1nRQZlNsznreR2468s",
  authDomain: "expensify-668e6.firebaseapp.com",
  databaseURL: "https://expensify-668e6.firebaseio.com",
  projectId: "expensify-668e6",
  storageBucket: "expensify-668e6.appspot.com",
  messagingSenderId: "1031279771098"
};

firebase.initializeApp(config);
const database = firebase.database();

//child_removed
database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref("expenses").on(
//   "value",
//   snapshot => {
//     //const val = snapshot.val();
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Overpriced Art Supplies",
//   note: "Yarp.",
//   amount: 32545,
//   createdAt: moment()
//     .subtract(4, "days")
//     .valueOf()
// });
//
// database.ref("expenses").push({
//   description: "Burgers n Beers",
//   note: "Narp.",
//   amount: 2599,
//   createdAt: moment()
//     .subtract(6, "days")
//     .valueOf()
// });
//
// database.ref("expenses").push({
//   description: "New shoes",
//   note: "",
//   amount: 12168,
//   createdAt: moment()
//     .subtract(8, "days")
//     .valueOf()
// });

// database.ref("notes").push({
//   title: "Recipes",
//   body: "Cupcakes. Yes, cupcakes."
// });
