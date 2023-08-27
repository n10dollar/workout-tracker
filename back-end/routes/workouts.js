const express = require('express')
const router = express.Router()
const c = require('../controllers/workoutController')

// GET workouts
router.get('/', c.getWorkouts)

// GET single workout
router.get('/:id', c.getWorkout)

// POST a workout
router.post('/', c.createWorkout)

// DELETE a workout
router.delete('/:id', c.deleteWorkout)

// UPDATE a workout
router.patch('/:id', c.updateWorkout)

module.exports = router