// check if screen id loaded or not 
if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
      console.log('document was not ready, place code here');
      myInitCode();
  });
}

function myInitCode() {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled');
      }
      //side bar toggle when clicked on bars button
      sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
  }
}

