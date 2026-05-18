const express = require("express");

const router = express.Router();

const Goal = require("../models/Goal");



// CREATE GOAL
router.post("/create", async (req, res) => {

  try {

    const goal = new Goal(req.body);

    await goal.save();

    res.status(201).json({
      message: "Goal Created"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

});



// GET ALL GOALS
router.get("/", async (req, res) => {

  try {

    const goals = await Goal.find();

    res.json(goals);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

});



// APPROVE GOAL
router.put("/approve/:id", async (req, res) => {

  try {

    const updatedGoal = await Goal.findByIdAndUpdate(

      req.params.id,

      {
        approved: true
      },

      {
        new: true
      }

    );

    res.json({
      message: "Goal Approved",
      updatedGoal
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

});



// UPDATE GOAL PROGRESS
router.put("/update/:id", async (req, res) => {

  try {

    const updatedGoal = await Goal.findByIdAndUpdate(

      req.params.id,

      {
        achievement: req.body.achievement,
        status: req.body.status
      },

      {
        new: true
      }

    );

    res.json({
      message: "Goal Updated",
      updatedGoal
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

});



module.exports = router;