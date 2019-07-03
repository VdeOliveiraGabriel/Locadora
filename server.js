const express = require('express');
const app = express()
const bodyParser = require('body-parser');


const config = require("./config/config.js");

const indexRoute = require('./routes/index');
const RouteUsers = require('./routes/RouteUsers');
const RouteMovies = require('./routes/RouteMovies');
const RouteRent = require('./routes/RouteRent')
const RouteAuth = require('./routes/RouteAuth')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/', indexRoute);
app.use('/users', RouteUsers);
app.use('/movies', RouteMovies);
app.use('/rent', RouteRent);
app.use('/auth', RouteAuth);


app.listen(config.server.port, () =>{
    console.log("Server listen on port: " + config.server.port);
});

module.exports = app;