const app = require("./app");

let port = 3005;

app.listen(port, () => {
  console.log("server is listening on port " + port);
});
