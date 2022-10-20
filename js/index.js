const menuIcon = document.querySelector('#menuIcon');
const exitIcon = document.querySelector('#exitIcon');
const navBarDesktop = document.querySelector('.navBarDesktop');
const navBarIcon = document.querySelector('.menuIcon');
const navBarMobile = document.querySelector('.navBarMobile');
const aboutUsContent = document.querySelector('#aboutUsContent');
const introImage = document.querySelector('#introImage')

const announcementContainer = document.querySelector('#annItemContainer');
const annItem = document.getElementsByClassName('announcementItem');


window.onload = handleResize;

window.addEventListener("resize", handleResize);

menuIcon.addEventListener('click', () => openMenu());

function openMenu () {
    navBarMobile.style.display = "block";
}

exitIcon.addEventListener('click', () => exitMenu());

function exitMenu () {
    navBarMobile.style.display = "none";
}

function handleResize () {
    if (window.innerWidth < window.innerHeight){
        navBarDesktop.style.display = "none";
        navBarIcon.style.display = "block";
        navBarIcon.style.position = "fixed";
        announcementContainer.style.flexDirection = "column";
        announcementContainer.style.alignItems = "center";
        for(let i = 0; i < annItem.length; i++){
            annItem[i].style.maxWidth = "70vw"
        }

    } else {
        navBarMobile.style.display = "none";
        navBarIcon.style.display = "none";
        navBarDesktop.style.display = "flex"
        announcementContainer.style.flexDirection = "row";
        announcementContainer.style.alignItems = "stretch";
        for(let i = 0; i < annItem.length; i++){
            annItem[i].style.maxWidth = "25vw";
        }
    }
}

const letsGoButton = document.querySelector('#letsGoButton')
letsGoButton.addEventListener('click', scrollHandler)
const topButton = document.querySelector('#topButton')
topButton.addEventListener('click', scrollHandler)
function scrollHandler(e) {
    e.preventDefault();
    let offsetTop = 0;
    if(e.target.id === "letsGoButton"){
        offsetTop = aboutUsContent.offsetTop;
        offsetTop = offsetTop - (window.innerHeight * 0.1)
    } else {
        offsetTop = introImage.offsetTop;
    }
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
// Scroll Code inspired by: https://codepen.io/tutsplus/pen/WNrQbGr

const alumniMobile = document.querySelector('#alumniMobile');
const galleryMobile = document.querySelector('#galleryMobile');
const studentsMobile = document.querySelector('#studentsMobile');

alumniMobile.addEventListener('click', () => mobileDropdownHandler("alumni"))
galleryMobile.addEventListener('click', () => mobileDropdownHandler("gallery"))
studentsMobile.addEventListener('click', () => mobileDropdownHandler("students"))


function mobileDropdownHandler (selection) {
    const curItemA = document.querySelector("#alumniDropdown");
    const curItemG = document.querySelector("#galleryDropdown");
    const curItemS = document.querySelector("#studentDropdown");
    switch(selection) {
        case "alumni":
            if(curItemA.style.display === "none"){
                curItemA.style.display = "flex";
                curItemG.style.display = "none";
                curItemS.style.display = "none";
            } else {
                curItemA.style.display = "none";
            }
            break;
        case "gallery":
            if(curItemG.style.display === "none"){
                curItemG.style.display = "flex";
                curItemA.style.display = "none";
                curItemS.style.display = "none";

            } else {
                curItemG.style.display = "none";
            }
            break;
        case "students":
            if(curItemS.style.display === "none"){
                curItemS.style.display = "flex";
                curItemA.style.display = "none";
                curItemG.style.display = "none";
            } else {
                curItemS.style.display = "none";
            }
            break;
        default:
            break;
        // code block
    }
}