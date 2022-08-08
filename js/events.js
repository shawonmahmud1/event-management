function makeRed() {
  document.body.style.backgroundColor = "red";
}
const blueButton = document.getElementById("blue-button");
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.background = "blue";
}
const greenBtn = document.getElementById("green-btn");
greenBtn.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};
const goldenRod = document.getElementById("make-goldenrod");
goldenRod.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}
const makeHotPink = document.getElementById("hotpink");
makeHotPink.addEventListener("click", function pink() {
  document.body.style.backgroundColor = "hotpink";
});
document
  .getElementById("light-blue")
  .addEventListener("click", function lightblue() {
    document.body.style.backgroundColor = "lightblue";
  });
