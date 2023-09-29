var mongoose = require('mongoose');

const statusDataString = localStorage.getItem('passSetStatusData');//get data from local storage
const statusData = JSON.parse(statusDataString);


console.log(statusData.date);
console.log(statusData.habitId);
document.getElementById("date").value = statusData.date;
document.getElementById("habit").value = mongoose.Types.ObjectId(statusData.habitId);

localStorage.removeItem( 'passSetStatusData' ); // Clear the localStorage