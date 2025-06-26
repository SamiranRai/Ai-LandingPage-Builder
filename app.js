const epxress = require('express');
const morgan = require('morgan');
const app = epxress();

// ENV: DEV
app.use(morgan('dev'));

// CONFIGURATION FILE
require('dotenv').config();

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Hello World"
    });
});


module.exports = app;

