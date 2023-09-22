const daysContainer = document.querySelector(".days");
nextBtn = document.querySelector(".next-btn");
prevBtn = document.querySelector(".prev-btn");
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

//get current date
const date = new Date();

//get current month
let currentMonth = date.getMonth();

//get current year
let currentYear = date.getFullYear();

//function to render days
function renderCalendar() {
  //get prev month current month and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  //update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  //update days html
  let daysHTMLQueries = "";

  //prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    daysHTMLQueries += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }
  //current month days
  for (let i = 1; i <= lastDayDate; i++) {
    //check if its today then add today class
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      console.log("today");
      daysHTMLQueries += `<div class="day today">${i}</div>`;
    } else {
      daysHTMLQueries += `<div class="day">${i}</div>`;
    }
  }

  //next month days
  for (let j = 1; j <= nextDays; j++) {
    daysHTMLQueries += `<div class="day next">${j}</div>`;
  }

  //run this command with every render
  hideTodayBtn();
  daysContainer.innerHTML = daysHTMLQueries;
}

renderCalendar();

//next month button
nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    //if month get greater than 11 make it 0 and increse year by 1
    currentMonth = 0;
    currentYear++;
  }
  //render calendar
  renderCalendar();
});

//previous month button
prevBtn.addEventListener("click", () => {
  currentMonth--;
  //check if month is less than 0
  if (currentMonth < 0) {
    //if month get less than 0 make it 12 and decrese year by 1
    currentMonth = 11;
    currentYear--;
  }
  //render calendar
  renderCalendar();
});

//go to today
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  //renderCalendar();
  renderCalendar();
});

//hide today button if already current month selected and vice versa
function hideTodayBtn(){
  if(
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ){
    todayBtn.style.display = "none";
  } else{
    todayBtn.style.display = "flex";
  }
}

