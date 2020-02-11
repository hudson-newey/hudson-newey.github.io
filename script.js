function openNav() { document.getElementById("mySidenav").style.width = "250px"; }
function closeNav() { document.getElementById("mySidenav").style.width = "0"; }

SB = document.getElementById('search-bar');
function navigate(e) {
  var key=e.keyCode || e.which;
  if (key==13 && !(SB.value == "" || SB.value == null)) {
      if (SB.value.includes("://"))
        document.location.href = SB.value;
      else
        document.location.href = "https://www.google.com/search?q=" + SB.value;
  }

  // hide search bar if escape key is pressed
  if (key==27) {
    SB.style.display = "none";
    SB.value = "";
    showTitle();
  }
}

function showSearch(e) {
  var key=e.keyCode || e.which;
  if (key!=27 && ((key > 31 && key < 112) || key == "undefined"))
    SB.style.display = "inline";
    SB.focus();
}

function infinateScroll() {
  var h = (screen.height / 3) + document.getElementById('webpage').scrollTop;
  if (h < 10400) {
    document.getElementById('infinateScroll').style.height = h + "px";
  }
}

function showTitle() {
  $("#instant-answers").addClass("hiding");
  document.getElementById('instant-answers').innerHTML='<i id="title"><h1><span class="thin">Grathium</span> Industries</h1></i>';
}

// instant answers (jquery)
var b;
function getanswer(q){
  $.get("https://api.duckduckgo.com/?q="+q+"&format=json", function(a) {
    b = JSON.parse(a);
    if(b.Abstract=="" || b.Abstract == null) {
      showTitle();
    } else if(addingPrograms == "search") {
      $("#instant-answers").removeClass("hiding");
      $("#instant-answers").html("<h3>"+b.Heading+"</h3><p>"+b.Abstract+"</p>");
    }
  });
}

// get background image using NASA apod API
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: "https://api.nasa.gov/planetary/apod?api_key=YEcWXl5e7QFNqpZM5ApQaMZBMoPQWT4715sNJZHb",
  data: "hd=True",
  dataType: "json",
  success: function (data) {
    document.getElementById('large-header').style.backgroundImage = "url('" + data.hdurl + "')";
  },
  error: function (result) {
    // if it can't get the image using API
    document.getElementById('large-header').style.backgroundImage = "url('Home/system64/background.png')";
  }
});

function loop() {
  infinateScroll();
  setTimeout(loop, 60);
}
loop();
