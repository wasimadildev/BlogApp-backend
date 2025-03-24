require('dotenv').config()
const express = require('express');

const {connectDB} = require('./db/db');

const app = express();

const PORT= process.eventNames.PORT || 8000;
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});





connectDB()
    .then(() => {   
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

