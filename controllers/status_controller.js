const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

module.exports.create = async function (req, res) {
  try {
    let habit = await Habit.findById(req.body.habit);

    //creating new status in status model
    let status = await Status.create({
      status: req.body.status,
      habit: req.body.habit,
    });

    //adding status to habit array
    habit.status.push(status);
    habit.save();

    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
