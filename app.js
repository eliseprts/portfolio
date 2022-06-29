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
const iconToggle = document.querySelector('.icone-toggle')

const toggleMenu = () => menuElementsToToggle.forEach(el => el.classList.toggle('hidden'))

iconToggle.addEventListener('click', toggleMenu)

// SMOOTH SCROLL
const menuLinks = [...document.querySelectorAll('.link-menu')]
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
window.addEventListener("resize", positionCalculation)