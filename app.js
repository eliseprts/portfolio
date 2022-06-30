// MODAL

const modalContainer = document.querySelector(".modal-container")
const modalTriggers = document.querySelectorAll(".modal-trigger")

// Display modal when page loaded
window.addEventListener("load", displayModal)
function displayModal() {
    modalContainer.classList.remove("hidden")
}
// Remove modal with close btn and when click on overlay
modalTriggers.forEach(trigger => trigger.addEventListener("click", hiddenModal))
function hiddenModal() {
    modalContainer.classList.add("hidden")
}

// HAMBURGER MENU

const menuElementsToToggle = document.querySelectorAll('.toggle-menu')
const iconToggle = document.querySelector('.icon-toggle')
const iconMenu = document.querySelector(".icon-menu")

let menuOpen = false

iconToggle.addEventListener("click", toggleMenu)
function toggleMenu() {
    if (!menuOpen) {
        menuElementsToToggle.forEach(el => el.classList.remove("hidden"))
        iconMenu.classList.replace("fa-bars", "fa-xmark")
        menuOpen = true
    } else {
        menuElementsToToggle.forEach(el => el.classList.add("hidden"))
        iconMenu.classList.replace("fa-xmark", "fa-bars")
        menuOpen = false
    }
}

// BUTTON TO TOP

const btnToTop = document.querySelector(".button-to-top")
const aboutSection = document.querySelector("#about")

// Calculate of the position top of about section
let sectionPosition
function calculatePosition(section) {
    sectionPosition = section.offsetTop
}
calculatePosition(aboutSection)
// console.log(sectionPosition)

// Display button from end of about section
window.onscroll = function () { displayBtn() }
function displayBtn() {
    if (document.body.scrollTop > sectionPosition || document.documentElement.scrollTop > sectionPosition) {
        btnToTop.classList.remove("hidden")
    } else {
        btnToTop.classList.add("hidden")
    }
}

btnToTop.addEventListener("click", scrollToTop)
function scrollToTop() {
    document.body.scrollTop = 0 // Safari
    document.documentElement.scrollTop = 0 // Chrome, Firefix, Opera
}


// SMOOTH SCROLL : add scroll-smooth in <html> instead

// const menuLinks = [...document.querySelectorAll(".link-menu")]
// console.log(menuLinks)
// const sections = [...document.querySelectorAll("section")]
// console.log(sections)

// Calculation of the position top of each section
// let sectionsPosition
// function positionCalculation() {
//     sectionsPosition = sections.map(section => section.offsetTop)
// }
// positionCalculation()
// console.log(sectionsPosition)

// Scroll
// menuLinks.forEach(link => link.addEventListener("click", addScrollSmooth))
// function addScrollSmooth(e) {
//     const linkIndex = menuLinks.indexOf(e.target)
//     console.log(linkIndex)
//     console.log(sectionsPosition[linkIndex])
//     window.scrollTo({
//         top: sectionsPosition[linkIndex],
//         behavior: "smooth"
//     });
// }

// If window is resizing, recall the function positionCalculation
// window.addEventListener("resize", positionCalculation)