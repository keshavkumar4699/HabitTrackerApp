const statusDataString = localStorage.getItem('passSetStatusData');//get data from local storage
const statusData = JSON.parse(statusDataString);

document.getElementById("update-form").action=`/status/update/?=${statusData.id}`;

localStorage.removeItem( 'passSetStatusData' ); // Clear the localStorage