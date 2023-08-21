const express = require('express')

// express listener
const app = express()

// route handler
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the app'})
})

// listen for requests
app.listen(PATH, () => {
    console.log('listening on port 4000')
})