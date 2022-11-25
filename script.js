let banner = document.getElementById("start");
let yourProfile = document.getElementById("you");
let teamsHomeElements = document.querySelectorAll('.you, .statusIcon, .chatLine, .search');
let chatTop = document.getElementById("chatTop");
let currentTab = document.getElementById("activeTab");
let main = document.querySelector("main");
let yourChat = document.querySelectorAll('.yourChat');
let chatBottom = document.querySelector('.chatBottom');
let footerMenu = document.querySelector('#footer');
console.log(chatBottom);


// banner.onclick = hideBanner;
// yourProfile.onclick = goToYourProfile;

function hideBanner() {
    banner.style.display = "none";
}

function goToYourProfile() {

    teamsHomeElements.forEach(element => {
        element.style.display = "none";
    });
    chatTop.style.display = "flex";
    currentTab.innerText = "Student (You)";
    main.style.backgroundColor = "black";
    yourChat.forEach(element => {
        element.style.display = "flex";
    });
    footerMenu.style.display = "none";
    chatBottom.style.display = "flex";

}

function timeout(func, t) {
    setTimeout(func, t);
}

