const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

//function to calculate the current streak
var calc_streak = function (habit) {
  const today_date = new Date();
  var prev_date = today_date;
  var streak = 0;
  while(1){
    console.log("Inside while");
    for (stat of habit.status) {
      console.log("Inside for loop");
      if (stat.date.toDateString() == prev_date.toDateString()) { //if status is marked
        console.log("Inside if status is found");
        if(stat.status == "Done"){ //if status is marked **DONE**
          console.log("Inside if status is marked done and streak is incemented");
          streak++;
          break;
        } else { //if status is marked **UNDONE**
          console.log("Inside if status is marked done and streak is incemented");
          return streak;
        }
      } else { // if status is not marked
        console.log("Inside if status is not found");
        return streak;
      }
    }
    prev_date = new Date(prev_date - 864e5);
  }
};

//rendering add status page
module.exports.add_status = function (req, res) {
  try {
    return res.render("add_status", {
      title: "Add Status",
    });
  } catch (err) {
    console.err("*****error*****", err);
  }
};

//function to create status
module.exports.create = async function (req, res) {
  try {
    let status = await Status.create(req.body);
    // let habit = await Habit.findById(req.body.habit).populate("status");

    await Habit.findByIdAndUpdate(req.body.habit, {
      $push: { status: String(status._id) },
      $inc: { total: 1 }, //incrementing total everytime new status gets created
    });
    return res.redirect("/week_view");
  } catch (err) {
    console.log(err);
    return res.redirect("/week_view");
  }
};

//rendering update status page
module.exports.update_status = function (req, res) {
  try {
    return res.render("update_status", {
      title: "Update Status",
    });
  } catch (err) {
    console.err("*****error*****", err);
  }
};

//function to update status
module.exports.update = async function (req, res) {
  try {
    await Status.findByIdAndUpdate(req.query.id, {
      $set: { status: req.body.status },
    });
    return res.redirect("/week_view");
  } catch (err) {
    console.log(err);
    return res.redirect("/week_view");
  }
};
