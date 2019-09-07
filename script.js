/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

SB = document.getElementById('search-bar')
function navigate(e) {
 var key=e.keyCode || e.which;
  if (key==13 && !(SB.value == "" || SB.value == null)) {
      if (SB.value.includes("://"))
        document.location.href = SB.value;
      else
        document.location.href = "https://www.google.com/search?q=" + SB.value;
  }

  // hide search bar
  if (key==27) {
    SB.style.display = "none";
    SB.value = "";
  }
}

function showSearch(e) {
  var key=e.keyCode || e.which;
  if (key!=27 && ((key > 64 && key < 111) || (key > 186 && key < 223)))
    SB.style.display = "inline";
    SB.focus();
}

function infinateScroll() {
  var h = (screen.height / 3) + document.getElementById('webpage').scrollTop;
  if (h < 10400) {
    document.getElementById('infinateScroll').style.height = h + "px";
  }
}

function start() {
  infinateScroll();
  setTimeout(start, 100);
}
start();
