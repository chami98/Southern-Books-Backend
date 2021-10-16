const functions = require("firebase-functions");

const app = require("./app");

exports.expressApi = functions.https.onRequest(app);
// exports.expressApi3 = functions.auth.user().onCreate((user) => {
// // 
// }