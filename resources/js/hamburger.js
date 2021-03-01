function hamburger() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("home");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.style.display ="block";

  } else {
    x.className = "topnav";
  }
}