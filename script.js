// Initilization
var addingPrograms = false;
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function GetSubstringIndex(str, substring, n) {
    var times = 0, index = null;
    while (times < n && index !== -1) {
        index = str.indexOf(substring, index+1);
        times++;
    }
    return index;
}

function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}




function openNav() { document.getElementById("mySidenav").style.width = "250px"; }
function closeNav() { document.getElementById("mySidenav").style.width = "0"; }

SB = document.getElementById('search-bar')
function navigate(e) {
 var key=e.keyCode || e.which;
  if ((key==13 && !(SB.value == "" || SB.value == null)) && addingPrograms == false) {
      if (SB.value.includes("://"))
        document.location.href = SB.value;
      else
        document.location.href = "https://duckduckgo.com/?q=" + SB.value +
        "&kj=#21252b&kx=#00afff&k7=#282c34&k8=#abb2bf&k9=#cbd2df&kaa=#abb2bf";
  }

  // adding adding programs
  if ((key==13 && !(SB.value == "" || SB.value == null)) && addingPrograms == true) {
    var temps = SB.value;
    SB.style.display = "none";
    SB.value = "";
    createProgram(temps, false);
    addingPrograms = false;
  }

  // hide search bar if escape key is pressed
  if (key==27) {
    SB.style.display = "none";
    SB.value = "";
  }
}

function showSearch(e) {
  var key=e.keyCode || e.which;
  if (key!=27 && ((key > 31 && key < 112) || key == "undefined"))
    SB.style.display = "inline";
    SB.focus();
}

// add the new program to the sidebar
function createProgram(program, install) {
  var newProgram = document.createElement("a");
  newProgram.innerHTML = program;
  newProgram.href = "applications/" + program + "/index.html";
  newProgram.className = "menuitem";
  document.getElementById("mySidenav").appendChild(newProgram);

  if (install == false) { // if it is a new program
    // create cookie
    var d = new Date();
    // individual programs are seperated by a exclemation point
    document.cookie = 'InstalledPrograms=' + getCookie("InstalledPrograms") + '' + program + '!; expires=' + days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' 20:47:11 UTC; path=/'
  }
}

function uninstallProgram(program) {
  var temps = getCookie("InstalledPrograms");
  if (!temps.includes(program)) { console.log("program, " + program + " not found!"); return; } // if the program is not installed

  delete_cookie("InstalledPrograms");
  temps = temps.replace(program + '!', '')
  var d = new Date();
  document.cookie = 'InstalledPrograms=' + getCookie("InstalledPrograms") + '' + temps + '; expires=' + days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' 20:47:11 UTC; path=/'
  window.location.reload();
}

function infinateScroll() {
  var h = (screen.height / 3) + document.getElementById('webpage').scrollTop;
  if (h < 10400) {
    document.getElementById('infinateScroll').style.height = h + "px";
  }
}



function loop() {
  infinateScroll();
  setTimeout(loop, 100);
}


// add previously installed programs
var programList = getCookie("InstalledPrograms");
var programCount = (programList.match(/!/g) || []).length;

var pointer = 0;
var oldPointer = 0;
for (var i = 0; i < programCount; i++) {
  oldPointer = pointer;
  pointer = GetSubstringIndex(programList, "!", i + 1);
  var loadPrograms = programList.substring(oldPointer, pointer);
  loadPrograms = loadPrograms.replace('!','');
  createProgram(loadPrograms, true);
}



loop();
