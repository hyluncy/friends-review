const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./database/config/dbConnect');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

db.connectToDB();

app.use('/api/users', require('./routes/user'));
app.use('/api/experiences', require('./routes/experience'));

// Test home route
app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;  
