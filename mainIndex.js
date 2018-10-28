const express = require('express');
const app = express();
const path = require('path');
const myAPI = require("./src/api/index");

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + "/src/client"));

app.use("/api", myAPI);

app.get("*", (req, res) => {
  res.status(404).send({error: "Not found"});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
