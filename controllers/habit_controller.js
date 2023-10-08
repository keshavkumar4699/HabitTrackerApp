const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

//method to create new habit by retriving data from request
module.exports.create = async function (req, res) {
  try {
    await Habit.create(req.body);
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
};

//method to destroy habit and all its associated status
module.exports.destroy = async function (req, res) {
  try {
    //when multiple habits is to be deleted check if recieved request is array or not if array multiple delete request has been made
    //single delete request since string
    if (typeof req.query.id === "string") {
      habit = await Habit.findById(req.query.id).populate("status");
      // to delete all associated status
      for (let element of habit.status) {
        let id = element._id.toString();
        await Status.findByIdAndDelete(id);
      }
      await Habit.findByIdAndDelete(req.query.id);
    }
    //multiple delete request has been made since array
    else {
      for (let key in req.query.id) {
        habit = await Habit.findById(req.query.id).populate("status");
        // to delete all associated status
        for (let element of habit.status) {
          let id = element._id.toString();
          await Status.findByIdAndDelete(id);
        }
        await Habit.findByIdAndDelete(req.query.id[key]);
      }
    }
    res.send({});
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
