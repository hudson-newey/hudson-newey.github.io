/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function navigate(e) {
 var key=e.keyCode || e.which;
  if (key==13) {
    if (document.getElementById('search-bar').value.includes("://"))
      document.location.href = document.getElementById('search-bar').value;
    else
      document.location.href = "https://www.google.com/search?q=" + document.getElementById('search-bar').value;
  }

  // hide search bar
  if (key==27) {
    document.getElementById("search-bar").style.display = "none";
  }
}

function showSearch() {
  document.getElementById('search-bar').style.display = "inline";
  document.getElementById('search-bar').focus();
}
