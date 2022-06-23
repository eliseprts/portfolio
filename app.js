// Burger menu
const menuElementsToToggle = document.querySelectorAll('.toggle-menu')
const iconToggle = document.querySelector('.icone-toggle')

const toggleMenu = () => menuElementsToToggle.forEach(el => el.classList.toggle('hidden'))

iconToggle.addEventListener("click", toggleMenu)

// Smooth scroll