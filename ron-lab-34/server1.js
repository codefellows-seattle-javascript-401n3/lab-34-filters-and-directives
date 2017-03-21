'use strict';

let PORT = process.env.PORT || 3000;
let express = require('express');
let app = express();

app.use(express.static('build'));

app.listen(3000, () => {
  console.log('server started');
});
