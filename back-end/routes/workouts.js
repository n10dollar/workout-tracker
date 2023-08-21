const express = require('express')

const router = express.Router()

// GET workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET workouts'})
})

// GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})    
})

// POST a workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a workout'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router