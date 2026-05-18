const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({

  employeeEmail: String,

  title: String,

  description: String,

  target: Number,

  weightage: Number,

  uom: String,

  achievement: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    default: "Not Started"
  },

  approved: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model("Goal", goalSchema);