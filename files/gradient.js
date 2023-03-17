document.addEventListener("DOMContentLoaded", function() {
	const headerText = document.getElementById("header-text");

	document.body.addEventListener("animationiteration", function() {
		const currentBg = getComputedStyle(document.body).backgroundImage;
		if (currentBg.includes("black")) {
			headerText.style.color = "white";
		} else {
			headerText.style.color = "black";
		}
	});
});
