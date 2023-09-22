const Habit = require("../models/habit_list");

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
