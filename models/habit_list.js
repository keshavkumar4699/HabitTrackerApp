const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  favorite:{
    type: Boolean,
  },
  streak:{
    type: Number,
    default: 0
  },
  bestStreak:{
    type: Number,
    default: 0
  },
  total:{
    type: Number,
    default: 0,
  },
  habit_time:{
    type: String,
    required: true
  },
  frequency:{
    type: String,
    required: true
  },
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Status'
    }
  ]
}, 
{
  timestamps: true
});

const Habit= mongoose.model('Habit', habitSchema);

module.exports = Habit;