const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  habit:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit'
  },
  date:{
    type:Date,
    required: true
  },
  status:{
    type: String,
  }
}, 
{
  timestamps: true
});

const Status= mongoose.model('Status', statusSchema);

module.exports = Status;