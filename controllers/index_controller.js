
module.exports.home = function(req, res){
  try{
    res.render('detail_view', {
      title: 'Details',
    });
  } catch(err){
    console.log(`******error encountered index_controller****** ${err}`);
  }
}