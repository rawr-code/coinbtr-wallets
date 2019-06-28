const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3231;

app.use(express.static(__dirname + '/../../build'));

server.listen(PORT, () => {
  console.log('Conneted to port:' + PORT);
});
