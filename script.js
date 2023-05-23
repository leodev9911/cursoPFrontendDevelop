const dropdownClick = document.querySelector('#dropdown-click')
const dropdownMenu = document.querySelector('#dropdown-menu')

dropdownClick.addEventListener('click', toggleDropdownMenu)

function toggleDropdownMenu () {
    dropdownMenu.classList.toggle('inactive')
}