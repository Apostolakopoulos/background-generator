var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function bodyLoad(){
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  setGradient();
}

function randomColorGenerator(){
  var value1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  var value2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

  body.style.background =
    "linear-gradient(to right, " + value1 + ", " + value2 + ")";

  css.textContent = body.style.background + ";";
}

// every time the value of the input changes we can detect it
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.addEventListener('load', bodyLoad);
button.addEventListener('click', randomColorGenerator);
