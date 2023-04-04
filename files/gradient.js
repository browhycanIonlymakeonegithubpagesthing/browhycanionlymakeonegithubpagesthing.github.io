function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  var tab = document.getElementById(tabName);
  tab.style.display = "block";
  evt.currentTarget.className += " active";

  var iframe = tab.querySelector("iframe");
  if (!iframe.hasAttribute("src")) {
    iframe.src = "https://agent-gamer-cool-thing.474652.workers.dev";
  }
}

function newTab() {
  var numTabs = document.getElementsByClassName("tablinks").length + 1;
  if (numTabs > 12) return;

  var tabButton = document.createElement("button");
  tabButton.className = "tablinks";
  tabButton.innerHTML = "Tab " + numTabs;
  tabButton.onclick = function() {
    openTab(event, "Tab" + numTabs);
  };
  var tabContent = document.createElement("div");
  tabContent.id = "Tab" + numTabs;
  tabContent.className = "tabcontent";
  tabContent.innerHTML = "<iframe></iframe>";

  var tabDiv = document.getElementsByClassName("tab-left")[0];
  tabDiv.appendChild(tabButton);
  document.body.appendChild(tabContent);
}

function openSettings() {
  var settingsMenu = document.getElementById("settings-menu");
  if (settingsMenu.style.display === "none") {
    settingsMenu.style.display = "block";
  } else {
    settingsMenu.style.display = "none";
  }
}

document.getElementById("hotbar-color").addEventListener("change", function() {
  var hotbar = document.getElementsByClassName("tab")[0];
  hotbar.style.backgroundColor = this.value;
});

document.getElementById("proxy-url").addEventListener("change", function() {
  var iframes = document.querySelectorAll("iframe");
  for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = this.value;
  }
});

document.getElementById("favicon-title").addEventListener("change", function() {
  document.title = this.value;
  var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = this.value;
  document.getElementsByTagName("head")[0].appendChild(link);
});
