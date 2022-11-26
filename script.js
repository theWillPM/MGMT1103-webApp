let banner = document.getElementById("start");
let yourProfile = document.getElementById("you");
let teamsHomeElements = document.querySelectorAll('.you, .statusIcon, .chatLine, .search');
let chatTop = document.getElementById("chatTop");
let currentTab = document.getElementById("activeTab");
let main = document.querySelector("main");
let yourChat = document.querySelectorAll('.yourChat');
let chatBottom = document.querySelector('.chatBottom');
let footerMenu = document.querySelector('#footer');
let timesent = document.querySelector('.timeSent');
let activeTab = "home";
let backButton = document.getElementById("back");
let navbar = document.getElementById("navbar");
let homeScreen = document.getElementById("homeScreen");
let bvcTeamsIcon = document.getElementById("bvcTeams");
let teamsIcon = document.getElementById("teamsIcon");

console.log(chatBottom);

goHome();

// banner.onclick = hideBanner;
// yourProfile.onclick = goToYourProfile;

function hideBanner() {
    banner.style.display = "none";
}

function goToYourChat() {
    teamsHomeElements.forEach(element => {
        element.style.display = "none";
    });
    chatTop.style.display = "flex";
    currentTab.innerText = "Student (You)";
    currentTab.className += " profileLink";

     
    main.style.backgroundColor = "black";
    yourChat.forEach(element => {
        element.style.display = "flex";
    });
    footerMenu.style.display = "none";
    chatBottom.style.display = "flex";
    timesent.style.display = "flex";
    activeTab = "you";
}

function goToChat() {
    navbar.style.display="flex";
    teamsHomeElements.forEach(element => {
        element.style.display = "flex";
    });
    homeScreen.style.display="none";
    chatTop.style.display = "none";
    currentTab.innerText = "Chat";
    currentTab.className = "";
    main.style.backgroundColor = "#303030";
    yourChat.forEach(element => {
        element.style.display = "none";
    });
    footerMenu.style.display = "flex";
    chatBottom.style.display = "none";
    timesent.style.display = "none";
    activeTab = "chat";

}

function goToYourProfile() {

}

function goHome() {
    teamsHomeElements.forEach(element => {
        element.style.display = "none";
    });
    currentTab.innerText = "Student (You)";
    currentTab.className += " profileLink";
    navbar.style.display = "none";
    teamsHomeElements.forEach(element => {
        element.style.display = "none";
    });
    main.style.maxHeight = "540px";
    main.style.height = "540px";
    footerMenu.style.display = "none";
    homeScreen.style.display = "flex";

    activeTab = "home";
}


function backClick() {
    if (activeTab == "you") {
        goToChat();
    } else
    if (activeTab == "chat") {
        goHome();
    }
}

function teamsClick() {
    goToChat;
}

function bvcTeamsClick() {
    goToBVCTeams();
}

function timeout(func, t) {
    setTimeout(func, t);
}