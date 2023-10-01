const Habit = require("../models/habit_list");
const Status = require("../models/habit_status");

// var calc_streak = function (status_date, habit, status) {
//   var streak = habit.streak;

//   //to get the date of todays date
//   const today_date = new Date();
//   //to get the date of current status date
//   var curr_date = new Date(status_date); 

//   var prev_date_status_doc = null; //to get the status document of previous date
//   var next_date_status_doc = null; //to get the status document of next date

//   if (status == "Done") { //in backward

//     var temp_streak=0;
//     var prev_date =  today_date;

//     while (prev_date!=curr_date) {
//       //find prev day status in status array of habit
//       for (stat of habit.status) {
//         if (stat.date.toDateString() == prev_date.toDateString()) {
//           temp_streak++;
//           break;
//         } else {
//           return temp_streak;
//         }
//       }
//       var prev_date = new Date(prev_date - 864e5); //to get date of previous day from current date
//     }

//   } else if (status == "Not Done") { //in forward
//     var temp_streak=0;
//     var prev_date =  today_date;

//     while (prev_date!=curr_date) {
//       //find prev day status in status array of habit
//       for (stat of habit.status) {
//         if (stat.date.toDateString() == prev_date.toDateString()) {
//           temp_streak++;
//           break;
//         } else {
//           return temp_streak;
//         }
//       }
//       var prev_date = new Date(prev_date - 864e5); //to get date of previous day from current date
//     }
//   }
// };

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
    let habit = await Habit.findById(req.body.habit).populate("status");

    calc_streak(habit);

    await Habit.findByIdAndUpdate(req.body.habit, {
      $push: { status: String(status._id) },
      $inc: { total: 1 }, //incrementing total everytime new status gets created
      // $set: { streak: calc_streak(habit) },
    });
    return res.redirect("/week_view");
  } catch (err) {
    console.log(err);
    return res.redirect("/week_view");
  }
};
