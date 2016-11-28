var express = require('express');
var os = require("os");
var cors = require('cors');
const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to OpenShift!! My HostName is: ' + os.hostname() + '\n');
});

