const statusDataString = localStorage.getItem('passSetStatusData');//get data from local storage
const statusData = JSON.parse(statusDataString);

document.getElementById("update-form").action=`/status/update?id=${statusData.id}&habit=${statusData.habitId}`;

localStorage.removeItem( 'passSetStatusData' ); // Clear the localStorage