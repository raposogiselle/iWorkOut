const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Workout name"
  },
  type: {
    type: String,
    required: "Workout type"
  },

  duration: {
    type: Number,
    required: "duration"
  },
  
  weight: {
    type: Number,
    required: "Weight"
  },

  reps: {
    type: Number,
    required: "Reps"
  },

  sets: {
    type: Number,
    required: "Sets"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
