const Workout = require('../models/workout')

module.exports = {
    getLastWorkout: async function (req, res) {
  
      try {
        const response = await Workout.find({})
        res.json(response)
      } catch (error) {
        res.send(error)
      }
  
    },
    createWorkout: async function(req, res){
      try {
        const response = await Workout.create()
        res.json(response)
      } catch (error) {
        res.send(error)
      }
    },
    addExercise: async function(req, res){
      try {
        const response = await Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            }
        )
        res.json(response);
      } catch (error) {
        res.send(error)
      }
    },
    getWorkoutsInRange: async function(req, res){
      try {
        const response = await Workout
        
      } catch (error) {
        res.send(error)
      }
    }
  }