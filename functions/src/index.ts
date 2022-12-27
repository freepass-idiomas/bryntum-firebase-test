import * as functions from "firebase-functions";
import { EventStore } from '@bryntum/calendar';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  let eventstore = new EventStore()
  functions.logger.info(eventstore.allCount, {structuredData: true});


  response.send("Hello from Firebase!");
});
