document.addEventListener("DOMContentLoaded", function () {
  const hiddenBtn = document.getElementById("hidden-btn");

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 192) { // keyCode 192 corresponds to the "`" key
      hiddenBtn.style.display = hiddenBtn.style.display === "none" ? "block" : "none";
    }
  });
});

const textList = [
	"Insert Text Here",
	"Javascript Is Cool",
	"Go Touch Grass",
	"outdoorschool",
	"Crazygird=Gamign"
];

function changeText() {
	const clickableText = document.getElementById("clickable-text");
	const randomIndex = Math.floor(Math.random() * textList.length);
	clickableText.textContent = textList[randomIndex];
}
