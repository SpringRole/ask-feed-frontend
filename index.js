const express = require('express');
const path = require('path');
const app = express();

app.get('/health', function (req, res) {
  res.sendStatus(200);
});

//Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(3000, () => {
  console.log('Hi This port is running');
});
