require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const daysRoutes = require('./routers/days');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/days', daysRoutes);

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to database & listening on port", process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error);
    });