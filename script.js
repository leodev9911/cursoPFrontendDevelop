const dropdownClick = document.querySelector('#dropdown-click')
const dropdownMenu = document.querySelector('#dropdown-menu')
const mobileMenuClick = document.querySelector('.file-icon__container')
const mobileMenu = document.querySelector('.mobile-menu__container')

dropdownClick.addEventListener('click', toggleDropdownMenu)
mobileMenuClick.addEventListener('click', showMobileMenu)

function toggleDropdownMenu () {
    dropdownMenu.classList.toggle('inactive')
}

function showMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}