document.addEventListener("DOMContentLoaded", function () {
  const headerText = document.getElementById("header-text");
  const hiddenBtn = document.getElementById("hidden-btn");

  document.body.addEventListener("animationiteration", function () {
    const currentBg = getComputedStyle(document.body).backgroundImage;
    if (currentBg.includes("black")) {
      headerText.style.color = "white";
    } else {
      headerText.style.color = "black";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "`") {
      hiddenBtn.style.display = hiddenBtn.style.display === "none" ? "block" : "none";
    }
  });
});
