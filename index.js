const server = require("express");
const app = server();

app.get("/", (req, res) => {
  res.send("hola cdwenz");
});

app.listen(8080);
console.log("listen in port 8080");
