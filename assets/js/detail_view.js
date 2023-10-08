function visitAddPage(){
  window.location='/habit/add_habit';
}

//FOR DELETING MULTIPLE TASKS
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

  // Create href URL with selected IDs
  const url = "/habit/destroy/?" + selectedIds.map((id) => `id=${id}`).join("&");
  fetch(url)
    .then((response) => response.json()) // return response in JSON
    .then((data) => {
      console.log(data); // Handle the response data
      window.location.href = "/"; //if deleted redirect to home page
    })
    .catch((error) => {
      console.error("Error:", error);
      window.location.href = "/"; // if error encountered redirect to homepage
    });
}