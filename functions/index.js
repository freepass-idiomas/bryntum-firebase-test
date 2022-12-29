const functions = require("firebase-functions");
import { EventStore } from '../node_modules/@bryntum/calendar/calendar.module.js';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
    let a = new EventStore()
  response.send("Hello from Firebase!");
});
