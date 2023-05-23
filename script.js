const dropdownClick = document.querySelector('#dropdown-click');
const dropdownMenu = document.querySelector('#dropdown-menu');
const mobileMenuClick = document.querySelector('.file-icon__container');
const mobileMenu = document.querySelector('.mobile-menu__container');
const shoppingCartClick = document.querySelector('.shop-car-img__container');
const shoppingCart = document.querySelector('.shopping-cart__container');

dropdownClick.addEventListener('click', toggleDropdownMenu);
mobileMenuClick.addEventListener('click', toggleMobileMenu);
shoppingCartClick.addEventListener('click', toggleShoppingCart);

function toggleDropdownMenu () {  
    const shoppingCartClosed = shoppingCart.classList.contains('inactive');
    
    if (!shoppingCartClosed) {
        shoppingCart.classList.add('inactive');
    };

    dropdownMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {  
    const shoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!shoppingCartClosed) {
        shoppingCart.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const dropdownMenuClosed = dropdownMenu.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!dropdownMenuClosed) {
        dropdownMenu.classList.add('inactive')
    }

    shoppingCart.classList.toggle('inactive');
}