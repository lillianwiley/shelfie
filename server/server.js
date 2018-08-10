require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const controller = require('./controller');

const app = express();

massive( process.env.CONNECTION_STRING )

const PORT = 3005;
 app.listen(PORT, () => {
    console.log(`eavesdropping on port ${PORT}`);
})