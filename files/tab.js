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
    var proxyUrlInput = document.getElementById('proxy-url');
    var startingUrl = proxyUrlInput.value;
  
    var numTabs = document.getElementsByClassName("tablinks").length + 1;
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
  
    var tabDiv = document.getElementsByClassName("tab")[0];
    tabDiv.insertBefore(tabButton, tabDiv.lastElementChild);
    document.body.appendChild(tabContent);
  
    var iframe = tabContent.querySelector("iframe");
    if (startingUrl) {
      iframe.src = startingUrl;
    } else {
      iframe.src = 'https://agent-gamer-cool-thing.474652.workers.dev/';
    }
  }
  
  function toggleSettingsMenu() {
    var settingsMenu = document.getElementById("settings-menu");
    settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
  }
  
  document.getElementById("hotbar-color").addEventListener("change", function (event) {
    document.querySelector(".tab").style.backgroundColor = event.target.value;
  });
  
  document.getElementById("favicon-title").addEventListener("input", function (event) {
    document.title = event.target.value;
  });
  
  document.getElementById("proxy-url").addEventListener("input", function (event) {
    var newProxyUrl = event.target.value;
    var tabcontents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontents.length; i++) {
      var iframe = tabcontents[i].querySelector("iframe");
      if (!iframe.hasAttribute("src")) {
        iframe.setAttribute("src", newProxyUrl);
      }
    }
  });
  
  function updateFaviconTitle() {
    var faviconTitleInput = document.getElementById('favicon-title');
    var newTitle = faviconTitleInput.value;
    document.title = newTitle;
  };
  
  function updateFavicon() {
    var faviconUrlInput = document.getElementById('favicon-url');
    var faviconUrl = faviconUrlInput.value;
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  };