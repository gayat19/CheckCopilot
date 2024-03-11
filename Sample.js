const express = require('express');
const bodyParser = require('body-parser');

// Add any other required modules here

// Your code goes here

const app = express();
app.use(bodyParser.json());

// Define your API routes here

app.listen(3000, () => {
    console.log('API server is running on port 3000');
});