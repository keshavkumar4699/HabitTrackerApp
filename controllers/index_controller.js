module.exports.home = function(req, res){
  try{
    res.render('detail_view', {
      title: 'Details',
    });
  } catch(err){
    console.log(`******error encountered index_controller****** ${err}`);
  }
}

module.exports.addHabit = function(req, res){
  try{
    res.render('add_habit', {
      title: 'Add New Task',
    });
  } catch(err){
    console.log(`******error encountered add_habit controller****** ${err}`);
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

