const { time } = require('console');
const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  habit:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit'
  },
  status:{
    type: Boolean,
  }
}, 
{
  timestamps: true
});

const Habit= mongoose.model('Habit', habitSchema);

module.exports = Habit;