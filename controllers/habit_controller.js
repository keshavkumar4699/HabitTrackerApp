const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

module.exports.add_habit = function (req, res) {
  try {
    res.render("add_habit", {
      title: "Add New Habit",
    });
  } catch (err) {
    console.log(`******error encountered add_habit controller****** ${err}`);
  }
};

module.exports.create = async function (req, res) {
  try {
    await Habit.create(req.body);
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
};

module.exports.destroy = async function (req, res) {
  try {
    if (typeof req.query.id === "string") {
      habit = await Habit.findById(req.query.id).populate('status');
      for(let element of habit.status){
        let id = element._id.toString();
        await Status.findByIdAndDelete(id);
      }
      await Habit.findByIdAndDelete(req.query.id);
    } else {
      for (let key in req.query.id) {
        await Habit.findByIdAndDelete(req.query.id[key]);
      }
    }
    res.send({});
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
