const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

module.exports.add_status = function(req, res){
  try{
    return res.render("add_status",{
      title: "Add Status"
    });
  } catch(err) {
    console.err("*****error*****", err);
  }
}

module.exports.create = async function (req, res) {
  try {
    let status = await Status.create(req.body);
    await Habit.findByIdAndUpdate(
      req.body.habit,
      {$push: {'status': String(status._id)}}
      );
    return res.redirect("/week_view");
  } catch (err) {
    console.log(err);
    return res.redirect("/week_view");
  }
};
