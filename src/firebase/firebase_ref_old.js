import * as firebase from "firebase";

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

// database.ref("notes").push({
//   title: "Recipes",
//   body: "Cupcakes. Yes, cupcakes."
// });

//database.ref("notes/-KvzcSrjerMu6OmeBRxA").remove();

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     const val = snapshot.val();
//     const phrase = `${val.name} is a ${val.job.title} at ${val.job.company}`;
//     console.log(phrase);
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );
//
// setTimeout(() => {
//   database.ref("age").set(25);
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref("age").set(35);
// }, 10500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Daniel S",
//     age: "39",
//     stressLevel: 6,
//     job: {
//       title: "Stripper",
//       company: "Joe Mamez Inc."
//     },
//     hatesAnime: true,
//     location: {
//       city: "Kingsport",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data saved!");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });
//
// // database
// //   .ref("hatesAnime")
// //   .remove()
// //   .then(() => {
// //     console.log("hatesAnime removed.");
// //   })
// //   .catch(error => {
// //     console.log("Error removing hatesAnime", error);
// //   });
//
// //database.ref("hatesAnime").set(null);
//
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
//   })
//   .then(() => {
//     console.log("Data updated.");
//   })
//   .catch(error => {
//     console.log("Error updating data", error);
//   });
