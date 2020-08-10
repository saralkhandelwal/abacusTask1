const express = require('express');

const app = express();
app.get('/index', (req, res) => {
  res.send('Service has been deployed and you are receiving the output response from service deployed on docker');
});

app.listen(8080,() => {
  console.log('Listening on port 8080');
});
