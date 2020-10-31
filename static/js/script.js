function infinateScroll() {
  var h = (screen.height / 1.6) + document.getElementById('webpage').scrollTop;
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

// get background image using NASA apod API
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: "https://api.nasa.gov/planetary/apod?api_key=YEcWXl5e7QFNqpZM5ApQaMZBMoPQWT4715sNJZHb",
  data: "hd=False",
  dataType: "json",
  success: function (data) {
    document.getElementById('large-header').style.backgroundImage = "url('" + data.url + "')";
  },
  error: function (result) {
    // if it can't get the image using API
    document.getElementById('large-header').style.backgroundImage = "url('static/background.png')";
  }
});

function loop() {
  infinateScroll();
  setTimeout(loop, 1);
}
loop();
