document.getElementById('delete-habit-button').style.display = 'none'; //set delete button display to none


const daysContainer = document.querySelector(".days");
month = document.querySelector(".month");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var curr = new Date(); // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

var firstday = new Date(curr.setDate(first));

function renderWeekCalendar(weekfirstday) {

  //update current year and month in header
  month.innerHTML = `${
    months[weekfirstday.getMonth()]
  } ${weekfirstday.getFullYear()}`;

}

renderWeekCalendar(firstday);

//execute this function when new status is to be set
function getStatusData(e){
  var setStatusData = {
    'date' : e.getAttribute('data-date'),
    'habitId' : e.getAttribute('data-habit')
  };
  setStatusDataString = JSON.stringify(setStatusData);
  localStorage.setItem( 'passSetStatusData', setStatusDataString); //set data into local storage to pass on the next page
  location='/status/add_status'; //redirect to next page
}

//execute this function when status is to be updated
function updateStatusData(e){
  var setStatusData = {
    'id': e.getAttribute('data-id'),
    'habitId' : e.getAttribute('data-habit')
  };
  console.log(setStatusData);
  setStatusDataString = JSON.stringify(setStatusData);
  localStorage.setItem( 'passSetStatusData', setStatusDataString); //set data into local storage to pass on the next page
  location='/status/update_status'; //redirect to next page
}