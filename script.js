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
let footerButton = document.querySelectorAll('.footerButton');
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
let bvcPoints = document.getElementById("bvcPoints");
let current = "old";
let currentTheme = "dark"
let chatTopSpan = document.querySelectorAll('chatTop,span');
let toolTips = document.querySelectorAll('.tooltip');
let androidBottom = document.getElementById("androidBottom");
let currentSlide = 1;
let BVCpoints = document.querySelector('strong');
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");
let slide5 = document.getElementById("slide5");
let slide6 = document.getElementById("slide6");
let slide7 = document.getElementById("slide7");
let slideButtons = document.querySelectorAll('[id^="slide"]');
let darkButton = document.getElementById("darkTheme");
let lightButton = document.getElementById("lightTheme");
// console.log(yourChatYou);

/* I AM LEARNING
THE CODE IS A MESS, SORRY! */

goHome();
setDarkMode();

function getVariable() {
    let rootStyle = getComputedStyle(rootElement);
}

function setLightMode() {
    rootElement.style.setProperty('--color1', 'rgb(200,200,255)');
    rootElement.style.setProperty('--color2', 'white');
    rootElement.style.setProperty('--color3', 'rgb(84 109 255)');
    rootElement.style.setProperty('--color4', 'rgb(84 109 255)');
    rootElement.style.setProperty('--color5', 'white');
    rootElement.style.setProperty('--color6', '#888888');
    rootElement.style.setProperty('--color7', 'black');
    currentTab.style.color = "var(--color5)";
    badges.style.backgroundColor = "var(--color5)";
    chatTopSpan.forEach(element => {
        element.style.color="var(--color5)";
   });
    footerButton.forEach(element => {
        element.style.color="var(--color5)";
   });
   toolTips.forEach(element => {
    element.style.color = "var(--color5)";
    element.style.backgroundColor = "var(--color7)";
});
profileIconBarContainer.style.backgroundColor="var(--color4)";
bvcPoints.style.color="white";
androidBottom.style.backgroundColor ="var(--color7)";
lightButton.style.backgroundColor="var(--color4)";
darkButton.style.backgroundColor="black";
currentTheme="light";
}
function setDarkMode() {
    rootElement.style.setProperty('--color1', '#303030');
    rootElement.style.setProperty('--color2', 'rgb(20,20,20)');
    rootElement.style.setProperty('--color3', '#141414');
    rootElement.style.setProperty('--color4', 'rgb(118, 48, 210)');
    rootElement.style.setProperty('--color5', 'black');
    rootElement.style.setProperty('--color6', '#888888');
    rootElement.style.setProperty('--color7', 'white');
    currentTab.style.color="var(--color7)";
    footerButton.forEach(element => {
        element.style.color="var(--color5)";
   });
   badges.style.backgroundColor = "var(--color7)";
   chatTopSpan.forEach(element => {
       element.style.color="var(--color6)";
   }); 
   toolTips.forEach(element => {
    element.style.color = "var(--color5)";
    element.style.backgroundColor = "var(--color7)";
});
profileIconBarContainer.style.backgroundColor="var(--color5)";
bvcPoints.style.color="black";
androidBottom.style.backgroundColor ="var(--color5)";
lightButton.style.backgroundColor="black";
darkButton.style.backgroundColor="var(--color4)";
currentTheme="dark";
}


// banner.onclick = hideBanner;
// yourProfile.onclick = goToYourProfile;

function hideBanner() {
    banner.style.display = "none";
}

function goToYourChat() {
    focusSlide();
    goToChat();
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
    // setDarkMode();

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
    focusSlide(2);
}

function openYourProfile() {
    goToChat();
    goToYourChat();
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
    focusSlide(1);
}

function goToWadeChat() {
    goToChat();
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
    focusSlide(5);
}

function goToMeetingChat() {
    goToChat();
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
    focusSlide(3);
}

function openWadeProfile() {
    goToChat();
    goToWadeChat();
    openYourProfile();
    currentTab.innerText = "Wade Wilson";
    currentProfPic.src="./img/wade.png";
    yourProfPic.src="./img/wade.png";
    profName.textContent="Wade Wilson";
    yourProfile.removeAttribute('onclick');
    yourProfile.onclick = function() {timeout(switchProfile, 200)};
    currentEmail.textContent="w.wilson999@mybvc.ca";
    badges.style.display="none";


    profileIconBarContainer.innerHTML='<img id="profileIconBar" src="./img/profileIcons.png">';

    activeTab = "wadeProfile";
    focusSlide(6);
}

function switchProfile() {


    if (current == "old") {
    profileIconBarContainer.innerHTML='<strong style="color: white;">BVC Points: 42</strong><img id="profileIconBar" src="./img/profileIcons.png">';
    badges.style.display="flex";
    reviews.forEach(element => {
        element.style.display="flex";
    });
    current = "new";
    } else if (current == "new") {
    reviews.forEach(element => {
        element.style.display="none";
    });
    profileIconBarContainer.innerHTML='<img id="profileIconBar" src="./img/profileIcons.png">';
    badges.style.display="none";
    current = "old";
    }
    focusSlide(7);
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

function switchWadeProfile() {
    goToChat();
    goToWadeChat();
    openWadeProfile();
    switchProfile();
    setLightMode();
    current = "old";
 focusSlide(7);   
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

function focusSlide(slide) {
    slide1.style.backgroundColor="black";
    slide2.style.backgroundColor="black";
    slide3.style.backgroundColor="black";
    slide4.style.backgroundColor="black";
    slide5.style.backgroundColor="black";
    slide6.style.backgroundColor="black";
    slide7.style.backgroundColor="black";
    switch (slide) {
        case 1: {
            slide1.style.backgroundColor="var(--color4)";
            break;}
        case 2: {
            slide2.style.backgroundColor="var(--color4)";
            break;}
        case 3:{
            slide3.style.backgroundColor="var(--color4)";
            break;}
        case 4:{
            slide4.style.backgroundColor="var(--color4)";
            break;}
        case 5:{
            slide5.style.backgroundColor="var(--color4)";
            break;}
        case 6:{
            slide6.style.backgroundColor="var(--color4)";
            break;}
        case 7:
            slide7.style.backgroundColor="var(--color4)";
    }
}