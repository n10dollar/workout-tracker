require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express listener
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route handler
app.use('/api/workouts', workoutRoutes)

app.get('/', (req, res) => {
    res.json({mssg: 'default GET request'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})