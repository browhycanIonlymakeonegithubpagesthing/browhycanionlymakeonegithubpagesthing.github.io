function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function handleCopyButtonClick(event) {
    const code = event.target.getAttribute('data-code');
    copyToClipboard(code);
    alert('Javascript Copied!');
}

document.addEventListener("DOMContentLoaded", function() {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.addEventListener("mouseenter", function() {
            screen.querySelector(".message").style.opacity = "1";
            screen.querySelector(".message").style.zIndex = "1";
        });
        screen.addEventListener("mouseleave", function() {
            screen.querySelector(".message").style.opacity = "0";
            screen.querySelector(".message").style.zIndex = "0";
        });
    });

    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', handleCopyButtonClick);
    });
});
