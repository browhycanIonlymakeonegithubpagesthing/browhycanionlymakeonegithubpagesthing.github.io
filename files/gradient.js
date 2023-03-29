const textList = [
  "Insert Text Here",
  "Javascript Is Cool",
  "Go Touch Grass",
  "outdoorschool",
  "Crazygird=Gamign",
];

const dadJokes = [
  "what did the mathmatician say to his insurance company when he got into a car accident?",
  "his car got totalled!",
  "hahaha.....",
];

let dadJokeIndex = -1;

function changeText() {
  const clickableText = document.getElementById("clickable-text");

  // 5% chance to start displaying dad jokes
  if (Math.random() < 0.05 && dadJokeIndex === -1) {
    dadJokeIndex = 0;
  }

  if (dadJokeIndex >= 0 && dadJokeIndex < dadJokes.length) {
    clickableText.textContent = dadJokes[dadJokeIndex];
    dadJokeIndex++;
    if (dadJokeIndex === dadJokes.length) {
      dadJokeIndex = -1;
    }
  } else {
    const randomIndex = Math.floor(Math.random() * textList.length);
    clickableText.textContent = textList[randomIndex];
  }

  // 0.1% chance to start playing audio
  if (Math.random() < 0.001) {
    const audioChoices = [
      "https://insert-text-here.github.io/files/doublekill.mp3",
      "https://insert-text-here.github.io/files/gettrolled.mp3",
    ];
    const audioIndex = Math.floor(Math.random() * audioChoices.length);
    const audio = new Audio(audioChoices[audioIndex]);
    audio.play();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const clickableText = document.getElementById("clickable-text");
  clickableText.addEventListener("click", changeText);
});
