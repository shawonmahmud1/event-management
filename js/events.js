function makeRed() {
  document.body.style.backgroundColor = "red";
}
const blueButton = document.getElementById("blue-button");
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.background = "blue";
}
