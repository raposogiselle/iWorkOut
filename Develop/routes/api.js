const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.
  aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration"}}}]).then(dbWorkout => {
    res.json(dbWorkout);
  })
      .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
