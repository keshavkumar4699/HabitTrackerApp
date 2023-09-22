function visitAddPage(){
  window.location='/habit/add_habit';
}

//FOR DELETING TASKS

const deleteButton = document.getElementById("destroy-habit");
const checkboxes = document.getElementsByName("habitCheckbox");


function deleteTask(){
  console.log("inside delete event");
  // Collect IDs of selected checkboxes
  const selectedIds = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedIds.push(checkbox.id);
    }
  });

  for(let i of selectedIds){
    console.log(i);
  }

  // Create href URL with selected IDs
  const url = "/habit/destroy/?" + selectedIds.map((id) => `id=${id}`).join("&");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle the response data
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error:", error);
      window.location.href = "/";
    });
}