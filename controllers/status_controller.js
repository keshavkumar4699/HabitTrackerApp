const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

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
    if(req.body.status!='Unmark'){
      await Status.findByIdAndUpdate(req.query.id, {
        $set: { status: req.body.status },
      });
    } else {
      await Status.findByIdAndDelete(req.query.id);
      await Habit.findByIdAndUpdate(req.query.habit, {
        $pull: { status: req.query.id },
      });
    }
    return res.redirect("/week_view");
  } catch (err) {
    console.log(err);
    return res.redirect("/week_view");
  }
};
