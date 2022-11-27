let banner = document.getElementById("start");
let yourProfile = document.getElementById("you");
let teamsHomeElements = document.querySelectorAll('.you, .statusIcon, .chatLine, .search');
let chatTop = document.getElementById("chatTop");
let currentTab = document.getElementById("activeTab");
let main = document.querySelector("main");
let yourChatYou = document.querySelectorAll('.yourChatContainer.your, .timeSent.your, .yourChat.your');
let yourChatWade = document.querySelectorAll('.yourChatContainer.wade, .timeSent.wade, .yourChat.wade');
let allChat = document.querySelectorAll('yourChatContainer, .theirChatContainer, .yourChat, .theirChat, .timeSent');
let chatBottom = document.querySelector('.chatBottom');
let footerMenu = document.querySelector('#footer');
let activeTab = "home";
let backButton = document.getElementById("back");
let navbar = document.getElementById("navbar");
let homeScreen = document.getElementById("homeScreen");
let bvcTeamsIcon = document.getElementById("bvcTeams");
let teamsIcon = document.getElementById("teamsIcon");
let homeButton = document.getElementById("homeButtons");
let wadeChat = document.getElementById("wadeChat");
let meetingChat = document.getElementById("meetingChat");
let currentProfPic = document.getElementById("currentProfPic");
let yourProfPic = document.getElementById("yourChatPic");
let chatScreen = document.getElementById("chatScreen");
let theirChatWade = document.querySelectorAll('.theirChatContainer.wade, .theirChat.wade');
let profileIconBarContainer = document.getElementById("profileIconBarContainer");
let profileContent = document.querySelectorAll('#email, #emailContainer, #profileIconBarContainer, #profileIconBar, .badges');
let profName = document.querySelector('figcaption');
let currentEmail = document.getElementById('email');
console.log(yourChatYou);

goHome();

// banner.onclick = hideBanner;
// yourProfile.onclick = goToYourProfile;

function hideBanner() {
    banner.style.display = "none";
}

function goToYourChat() {
    if (activeTab!="yourProfile") 
    {
        teamsHomeElements.forEach(element => {
            element.style.display = "none";
        });
        chatTop.style.display = "flex";
        currentTab.innerText = "Student (You)";
        currentTab.className += " yourProfileLink";
        chatScreen.style.display = "flex";
        
        main.style.backgroundColor = "var(--color5)";

        yourChatYou.forEach(element => {
            element.style.display = "flex";
        });
        profileContent.forEach(element => {
            element.style.display = "none";
        });
        footerMenu.style.display = "none";
        chatBottom.style.display = "flex";
        activeTab = "you";
    }
}

function goToChat() {
    navbar.removeAttribute('style');
    chatScreen.removeAttribute('style');
    teamsHomeElements.forEach(element => {
        element.style.display = "flex";
    });
    profileContent.forEach(element => {
        element.style.display = "none";
    });
    allChat.forEach(element => {
        element.style.display = "none";
    });
    homeScreen.style.display="none";
    chatTop.style.display = "none";
    currentTab.innerText = "Chat";
    currentTab.className = "";
    main.style.backgroundColor = "var(--color1)";

    footerMenu.style.display = "flex";
    chatBottom.style.display = "none";
    activeTab = "chat";
    homeButton.style.display="none";
    currentProfPic.src="./img/profilePic2.png";
    chatScreen.style.display="none";   
    profileIconBarContainer.style.display="none";
    resetUser();
}

function openYourProfile() {
    chatTop.style.display = "none";
    yourProfile.style.display = "flex";
    navbar.style.display = "block";
    navbar.style.height = "50px";
    chatScreen.style.justifyContent = "flex-start";
    chatScreen.style.alignItems = "flex-start";
    allChat.forEach(element => {
        element.style.display = "none";
    });
    profileContent.forEach(element => {
        element.style.display = "flex";
    });
    chatBottom.removeAttribute('style');
    activeTab = "yourProfile";
}

function goHome() {
    profileIconBarContainer.style.display="none";
    teamsHomeElements.forEach(element => {
        element.style.display = "none";
    });
    navbar.style.display = "none";
    yourChatYou.forEach(element => {
        element.style.display = "none";
    });
    theirChatWade.forEach(element => {
        element.style.display = "none";
    });
    profileContent.forEach(element => {
        element.style.display = "none";
    });
    chatBottom.style.display = "none";
    main.style.maxHeight = "540px";
    main.style.height = "540px";
    footerMenu.style.display = "none";
    homeScreen.style.display = "flex";
    chatScreen.style.display= "none";
    homeButton.style.display= "flex";
    activeTab = "home";
}

function goToWadeChat() {
    
    goToYourChat();
    currentTab.innerText = "Wade Wilson";
    yourChatYou.forEach(element => {
        element.style.display = "none";
    });
    currentProfPic.src="./img/wade.png";
    theirChatWade.forEach(element => {
        element.style.display = "flex";
    });
    currentTab.className += " wadeProfileLink";
    yourChatWade.forEach(element => {
        element.style.display = "flex";
    });
    activeTab = "wade";
}

function openWadeProfile() {
    openYourProfile();
    yourProfPic.src="./img/wade.png";
    profName.textContent="Wade Wilson";
    currentEmail.textContent="w.wilson999@mybvc.ca";

    activeTab = "wadeProfile";
}

function backClick() {
    if (activeTab == "you" || activeTab == "wade" || activeTab == "meeting") {
        goToChat();
    } else
    if (activeTab == "chat") {
        goHome();
    } else
    if (activeTab == "yourProfile") {
        goToChat();
        goToYourChat();
    }
    if (activeTab == "wadeProfile") {
        goToChat();
        goToWadeChat();
    }
}

function openProfile() {
    if (activeTab == "you") {
        openYourProfile();
    } else
    if (activeTab == "chat") {
        goToChat();
    } else
    if (activeTab == "wade") {
        openWadeProfile();
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

function resetUser() {
    yourProfPic.src="./img/profilePic2.png";
    profName.textContent="Student (You)";
    currentEmail.textContent="s.tudent123@mybvc.ca";
}