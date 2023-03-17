document.addEventListener("DOMContentLoaded", function () {
  const hiddenBtn = document.getElementById("hidden-btn");

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 192) { // keyCode 192 corresponds to the "`" key
      hiddenBtn.style.display = hiddenBtn.style.display === "none" ? "block" : "none";
    }
  });
});
