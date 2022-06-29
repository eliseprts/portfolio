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

// BURGER MENU
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

// SMOOTH SCROLL
const menuLinks = [...document.querySelectorAll('.smooth-scrool-link')]
console.log(menuLinks)
const sections = [...document.querySelectorAll('section')]

// Calculation of the position top of each section
let sectionsPosition
function positionCalculation() {
    sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition)

// Scroll
menuLinks.forEach(link => link.addEventListener('click', addScrollSmooth))
function addScrollSmooth(e) {
    const linkIndex = menuLinks.indexOf(e.target)
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: 'smooth'
    })
}

// If window is resizing, recall the function positionCalculation
window.addEventListener('resize', positionCalculation)