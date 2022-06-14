// Import Dependencies
const express = require('express')
const cors = require('cors')

// Import JSON files
const projects = require('./projects.json')
const about = require('./about.json')

// Create our app object
const app = express();

// set up middleware
app.use(cors());

// Home route
app.get('/', (req, res) => {
    res.send('Hello World');
})

// Route for retrieving projects
app.get('/projects', (req, res) => {
    res.json(projects)
})

// Route for retrieving About
app.get('/about', (req, res) => {
    res.json(about)
})

// Declare prt variable
const PORT = process.env.PORT || 4000;

// Turn on server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));