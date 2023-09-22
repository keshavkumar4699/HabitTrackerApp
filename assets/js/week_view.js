const daysContainer = document.querySelector(".days");
nextMonthBtn = document.querySelector(".next-month-btn");
prevMonthBtn = document.querySelector(".prev-month-btn");
nextWeekBtn = document.querySelector(".next-week-btn");
prevWeekBtn = document.querySelector(".prev-week-btn");
todayBtn = document.querySelector(".today-btn");
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

  //update days html
  let daysHTMLQueries = "";

  for (let i = 1; i <= 7; i++) {
    let display_date = weekfirstday.getDate();
    daysHTMLQueries += `<div class="day" id="day">${display_date}</div>`;
    weekfirstday.setDate(weekfirstday.getDate() + 1);//incrementing weekdays by 1
  }

  hideTodayBtn();
  daysContainer.innerHTML = daysHTMLQueries;
}

renderWeekCalendar(firstday);

//next week button
nextWeekBtn.addEventListener("click", () => {
  first = curr.getDate() - curr.getDay();
  first = first + 7;

  let nextday = new Date(curr.setDate(first));
  renderWeekCalendar(nextday);
});

//previous week button
prevWeekBtn.addEventListener("click", () => {
  first = curr.getDate() - curr.getDay();
  first = first - 7;

  let prevday = new Date(curr.setDate(first));
  renderWeekCalendar(prevday);
});

//go to today
todayBtn.addEventListener("click", () => {
  temp = 0;//for keeping track of increment and decrement of weeks

  let curr = new Date(); // get current date
  let first = curr.getDate() - curr.getDay();
  firstday = new Date(curr.setDate(first));
  //renderWeekCalendar();
  renderWeekCalendar(firstday);
});

//hide today button if already current month selected and vice versa
function hideTodayBtn(){
  console.log(first);
  if(
    firstday.getDate() === first+7
  ){
    todayBtn.style.display = "none";
  } else{
    todayBtn.style.display = "flex";
  }
}