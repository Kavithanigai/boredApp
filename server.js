const express = require('express');
const app = express();

const boredAppRouter = require('./boredAppRouter');


app.use(express.static('public'));
app.use('/', boredAppRouter);

app.listen(process.env.PORT || 8080);


module.exports = app;
