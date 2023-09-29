const statusDataString = localStorage.getItem('passSetStatusData');//get data from local storage
const statusData = JSON.parse(statusDataString);

function setValue(variable, value) {
  var element = document.getElementById(variable);
  element.value = value;
}

window.onload = function(){
  setValue('date', statusData.date);
  setValue('habit', statusData.habitId)
}

localStorage.removeItem( 'passSetStatusData' ); // Clear the localStorage