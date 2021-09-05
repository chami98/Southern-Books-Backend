const functions = require("firebase-functions");

const app = require("./app");

exports.expressApi = functions.https.onRequest(app);
