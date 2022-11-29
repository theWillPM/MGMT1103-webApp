let banner = document.getElementById("start");
let yourProfile = document.getElementById("you");
let teamsHomeElements = document.querySelectorAll('.you, .statusIcon, .chatLine, .search');
let chatTop = document.getElementById("chatTop");
let currentTab = document.getElementById("activeTab");
let main = document.querySelector("main");
let yourChatYou = document.querySelectorAll('.yourChatContainer.your, .timeSent.your, .yourChat.your');
let yourChatWade = document.querySelectorAll('.yourChatContainer.wade, .timeSent.wade, .yourChat.wade');
let botChat = document.querySelectorAll('.meeting');
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
let profileContent = document.querySelectorAll('#email, .emailContainer, #profileIconBarContainer, #profileIconBar, .badges');
let badges = document.getElementById('badges');
let reviews = document.querySelectorAll('#review1, #review2, #peer');
let profName = document.querySelector('figcaption');
let currentEmail = document.getElementById('email');
let rootElement = document.querySelector(':root');
let current = "dark";
let chatTopSpan = document.querySelectorAll('chatTop,span');
let toolTips = document.querySelectorAll('.tooltip');
// console.log(yourChatYou);

/* I AM LEARNING
THE CODE IS A MESS, SORRY! */

goHome();

function getVariable() {
    let rootStyle = getComputedStyle(rootElement);
}

function setLightMode() {
    rootElement.style.setProperty('--color1', 'rgb(200,200,255)');
    rootElement.style.setProperty('--color2', 'rgb(20,20,20)');
    rootElement.style.setProperty('--color3', 'rgb(84 109 255)');
    rootElement.style.setProperty('--color4', 'rgb(84 109 255)');
    rootElement.style.setProperty('--color5', 'white');
    rootElement.style.setProperty('--color6', '#888888');
    rootElement.style.setProperty('--color7', 'black');
    badges.style.backgroundColor = "var(--color5)";
    chatTopSpan.forEach(element => {
        element.style.color="var(--color7)";
   });
   toolTips.forEach(element => {
    element.style.color = "var(--color5)";
    element.style.backgroundColor = "var(--color7)";
});
profileIconBarContainer.style.backgroundColor="var(--color4)"
current="light";
}
function setDarkMode() {
    rootElement.style.setProperty('--color1', '#303030');
    rootElement.style.setProperty('--color2', 'rgb(20,20,20)');
    rootElement.style.setProperty('--color3', '#141414');
    rootElement.style.setProperty('--color4', 'rgb(118, 48, 210)');
    rootElement.style.setProperty('--color5', 'black');
    rootElement.style.setProperty('--color6', '#888888');
    rootElement.style.setProperty('--color7', 'white');
    badges.style.backgroundColor = "var(--color7)";
    chatTopSpan.forEach(element => {
        element.style.color="var(--color6)";
   }); 
   toolTips.forEach(element => {
    element.style.color = "var(--color5)";
    element.style.backgroundColor = "var(--color7)";
});
profileIconBarContainer.style.backgroundColor="var(--color5)"
current="dark";
}


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
    setDarkMode();
    currentTab.style.fontSize="1.5em";
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
    yourProfile.onclick = function() {timeout(goToYourChat, 200)};
    resetUser();
}

function openYourProfile() {
    yourProfile.onclick="timeout(openYourProfile(), 200)";
    chatTop.style.display = "none";
    yourProfile.style.display = "flex";
    yourProfile.onclick = function() {timeout(switchProfile, 200)};
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
    badges.style.display="none";
    profileIconBarContainer.innerHTML='<img id="profileIconBar" src="./img/profileIcons.png">';
    chatBottom.removeAttribute('style');
    activeTab = "yourProfile";
    reviews.forEach(element => {
        element.style.display="none";
    });
    
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
    botChat.forEach(element => {
        element.style.display="none";
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

function goToMeetingChat() {
    goToWadeChat();
    
    currentTab.innerText = "[MGMT1103_2]G#12_Assignment1";
    yourChatYou.forEach(element => {
        element.style.display = "none";
    });
    currentProfPic.src="./img/meetingIcon.png";
    theirChatWade.forEach(element => {
        element.style.display = "none";
    });
    currentTab.className = "";
    yourChatWade.forEach(element => {
        element.style.display = "none";
    });
    botChat.forEach(element => {
        element.style.display="flex";
    });
    currentTab.style.fontSize="1em";
    activeTab = "meeting";
    
}

function openWadeProfile() {
    openYourProfile();
    yourProfPic.src="./img/wade.png";
    profName.textContent="Wade Wilson";
    yourProfile.removeAttribute('onclick');
    yourProfile.onclick = function() {timeout(switchProfile, 200)};
    currentEmail.textContent="w.wilson999@mybvc.ca";
    badges.style.display="none";


    profileIconBarContainer.innerHTML='<img id="profileIconBar" src="./img/profileIcons.png">';

    activeTab = "wadeProfile";
}

function switchProfile() {
    if (current == "dark") {
    setLightMode();
    profileIconBarContainer.innerHTML='<strong>BVC Points: 42</strong><img id="profileIconBar" src="./img/profileIcons.png">';
    badges.style.display="flex";
    reviews.forEach(element => {
        element.style.display="flex";
    });
    
    current = "light";


    } else if (current == "light") {
    setDarkMode();
    reviews.forEach(element => {
        element.style.display="none";
    });
    profileIconBarContainer.innerHTML='<img id="profileIconBar" src="./img/profileIcons.png">';
    badges.style.display="none";
    current = "dark";
    }
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
    else if (activeTab == "wadeProfile") {
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