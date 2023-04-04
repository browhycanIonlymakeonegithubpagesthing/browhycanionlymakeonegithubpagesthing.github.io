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
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  var iframe = document.getElementById(tabName).querySelector("iframe");
  if (!iframe.hasAttribute("src")) {
    iframe.src = "https://agent-gamer-cool-thing.474652.workers.dev";
  }
}

function newTab() {
  var numTabs = document.getElementsByClassName("tablinks").length;
  if (numTabs < 12) {
    numTabs++;
    var tabButton = document.createElement("button");
    tabButton.className = "tablinks";
    tabButton.innerHTML = "Tab " + numTabs;
    tabButton.onclick = function () {
      openTab(event, "Tab" + numTabs);
    };
    var tabContent = document.createElement("div");
    tabContent.id = "Tab" + numTabs;
    tabContent.className = "tabcontent";
    tabContent.innerHTML = "<iframe></iframe>";
    var tabDiv = document.getElementsByClassName("tab-left")[0];
    tabDiv.insertBefore(tabButton, tabDiv.lastElementChild);
    document.body.appendChild(tabContent);
  }
}

function openSettings() {
  var menu = document.getElementById("settings-menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
