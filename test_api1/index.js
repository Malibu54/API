//import dependencies

const express = require('express');
const bodyParser = require('body-parser');

//instance of the Express application
const app = express();

//Configure body-parser to handle data sent in POST requests:

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Define a test route to verify that your API is working

app.get('/', (req, res) => {
    res.send('¡API works perfect!');
  });

//  Listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in execution from ${PORT} port `);
});

//Creating routes and controllers (from route.apijs)

//import routes

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


//Execute with command node index.js

