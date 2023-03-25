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
(function() { var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://soraapp.com/assets/wishbone/10.19.3/assets/images/favicon-192.png'; document.title='Sora'; console.log(document.title); document.getElementsByTagName('head')[0].appendChild(link);})();
