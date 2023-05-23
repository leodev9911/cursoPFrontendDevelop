const dropdownClick = document.querySelector('#dropdown-click');
const dropdownMenu = document.querySelector('#dropdown-menu');
const mobileMenuClick = document.querySelector('.file-icon__container');
const mobileMenu = document.querySelector('.mobile-menu__container');
const shoppingCartClick = document.querySelector('.shop-car-img__container');
const shoppingCart = document.querySelector('.shopping-cart__container');
const cardsSection = document.querySelector('.card__container')
const productList = [];

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
        dropdownMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}
//para añadir las tarjetas de carrito
for (i = 0; i < 15; i++) {
    productList.push({
        name: 'Retro refrigerator',
        price: 120.00,
        image: './assets/img/fridge.png',
        icon: './assets/icons/bt_add_to_cart.svg',
    });
};

function renderCards (array) {
    for (product of array) {
        const article = document.createElement('article');
        article.classList.add('card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
    
        const belowContainer = document.createElement('div');
        belowContainer.classList.add('card-below__container');
    
        const textContainer = document.createElement('div');
        textContainer.classList.add('card-text__container');
    
        const productCardPrice = document.createElement('p');
        productCardPrice.classList.add('roboto-text');
        productCardPrice.innerText = '$ ' + product.price;
    
        const productCardName = document.createElement('p');
        productCardName.innerText = product.name;
    
        const figureContainer = document.createElement('figure');
        figureContainer.classList.add('car-icon');
    
        const cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', product.icon);
    
        cardsSection.appendChild(article);
        article.append(productImage, belowContainer);
        belowContainer.append(textContainer, figureContainer);
        textContainer.append(productCardPrice, productCardName);
        figureContainer.appendChild(cartIcon);
    };
};

renderCards (productList);