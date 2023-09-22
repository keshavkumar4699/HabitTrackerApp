const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  time:{
    type: time,
    required: true
  },
  frequency:{
    type: String,
    required: true
  },
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Habit'
    }
  ]
}, 
{
  timestamps: true
});

const Status= mongoose.model('Status', statusSchema);

module.exports = Status;