const express = require('express');
const app = express();
const path = require('path');
//const myHTML = require('./index.html');0;

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});