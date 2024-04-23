var die_roll = Math.floor(Math.random() * 6 + 1);
var die_roll2 = Math.floor(Math.random() * 6 + 1);

var random_image = "images/dice" + die_roll + ".png";
var random_image2 = "images/dice" + die_roll2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

function clicking() {
  image1.setAttribute("src", random_image);
  image2.setAttribute("src", random_image2);

  if (die_roll > die_roll2) {
    document.querySelector("h3").innerHTML = "player ... 1 ... 🏅";
    document.querySelector("h1").style.color = "blue";
  } else if (die_roll < die_roll2) {
    document.querySelector("h3").innerHTML = "player ... 2 ... 🏅";
    document.querySelector("#green").style.color = "green";
  } else {
    document.querySelector("h3").innerHTML = "🎌Draw🎌";
    document.querySelector("#green").style.color = "#F1C27B";
    document.querySelector("h1").style.color = "#F1C27B";
  }
}
