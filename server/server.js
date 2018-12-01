const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/../client/public'));



app.listen(PORT, () => {
  console.log('listening on port', PORT);
})