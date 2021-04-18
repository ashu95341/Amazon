const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51IgfnGSCxDUy9kleXYjnRX4L6GAIlsfcvOjO3Gsfuf7jmfGUPgkPrUiOkKSd3utjSK2cOPBnsXiaPltT4kfGe2fB005a4oZKIK"
);

// API

//App config
const app = express();
//Miidlewares
app.use(cors({ origin: true }));
app.use(express.json());
//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // request params can be used

  console.log("payment req received !! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/challenge-77515/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
