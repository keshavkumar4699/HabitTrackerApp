const Habit = require("../models/habit_list");

module.exports.home = async function(req, res){
  try{
    const habitList = await Habit.find({}); 
    res.render("detail_view", {
      title: 'Details',
      habits:  habitList
    });
  } catch(err){
    console.log(`******error encountered index_controller****** ${err}`);
  }
}

module.exports.week_detail = function(req, res){
  try{
    res.render('week_view', {
      title: 'Week View',
    });
  } catch(err){
    console.log(`******error encountered week_view controller****** ${err}`);
  }
}

module.exports.month_detail = function(req, res){
  try{
    res.render('month_view', {
      title: 'Month View',
    });
  } catch(err){
    console.log(`******error encountered week_view controller****** ${err}`);
  }
}

