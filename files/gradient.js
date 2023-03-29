const textList = [
  "Insert Text Here",
  "Javascript Is Cool",
  "Go Touch Grass",
  "outdoorschool",
  "Crazygird=Gamign"
  "InsertTextHere>GamerGuy12>Crazygird>BlueHalooo"
];

const dadJokes = [
  "what did the mathematician say to his insurance company when he got into a car accident?",
  "his car got totalled!",
  "hahaha....."
];

const audioList = [
  "https://insert-text-here.github.io/files/doublekill.mp3",
  "https://insert-text-here.github.io/files/gettrolled.mp3"
];

let dadJokeIndex = 0;

function changeText() {
  const random = Math.random();
  if (random < 0.05 && dadJokeIndex < dadJokes.length) {
    document.getElementById("clickable-text").innerHTML = dadJokes[dadJokeIndex];
    dadJokeIndex++;
  } else {
    const index = Math.floor(Math.random() * textList.length);
    document.getElementById("clickable-text").innerHTML = textList[index];
  }

  if (random < 0.01) {
    const audioIndex = Math.floor(Math.random() * audioList.length);
    const audio = new Audio(audioList[audioIndex]);
    audio.play();
  }
}

document.getElementById("clickable-text").addEventListener("click", changeText);
