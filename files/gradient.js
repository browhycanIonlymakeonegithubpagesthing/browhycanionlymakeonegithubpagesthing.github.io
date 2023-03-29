const textList = [
  "Insert Text Here",
  "Javascript Is Cool",
  "Go Touch Grass",
  "outdoorschool",
  "Crazygird=Gamign",
  "InsertTextHere>GamerGuy12>CrazyGird/Mide>BlueHalooo",
];

function changeText() {
  const clickableText = document.getElementById("clickable-text");
  const randomIndex = Math.floor(Math.random() * textList.length);
  clickableText.textContent = textList[randomIndex];

  // 5% chance to change the text to a dad joke
  if (Math.random() < 0.05) {
    const dadJokes = [
      "what did the mathmatician say to his insurance company when he got into a car accident?",
      "his car got totalled!",
      "hahaha.....",
    ];
    const jokeIndex = Math.floor(Math.random() * dadJokes.length);
    clickableText.textContent = dadJokes[jokeIndex];
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
