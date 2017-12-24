var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../build/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 3000;

app.listen(port, () => console.log('Running frontend on port: ' + port)); // eslint-disable-line no-console
