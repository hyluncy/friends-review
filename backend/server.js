const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config(); 
const db = require('./database/config/dbConnect'); 

const app = express();
const HTTP_PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
// app.use(cors());
app.use(cors({                // Temporary while using localhost to ensure frontend and backend communicate even though we're using different ports. 
   origin: "http://localhost:3000",
   methods: "GET,POST,PUT,DELETE",
   credentials: true
}));

app.use('/api/users', require('./routes/user')); 
app.use('/experiences', require('./routes/experience'))

// Connect to MongoDB
db.connectToDB(); 

// Home page test route
app.get('/', (req, res) => {
   res.send('Hello World');
});

// User authentication
// POST signup --> create new user
// POST login --> authenticate a user and issue a token


// Reviews
// POST /reviews --> add a new review
// GET /reviews --> gret all reviews (filtered by friends or tags)
// GET /reviews/:id --> get a specific review by ID


// Products
// GET /products: get all products
// GET /products/:id --> get a specific product with its reviews


// Friends
// GET /friends --> list users' friends
// POST /friends/add --> add a friend
// DELETE /friends/remove --> remove a friend




// Start Server
app.listen(HTTP_PORT, () => console.log(`Server listening on: ${HTTP_PORT}`));




