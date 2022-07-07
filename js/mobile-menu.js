const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.header-nav');

function showItem(element) {
    element.classList.toggle('active')
}

menuIcon.addEventListener('click', () => {
    showItem(menu)
});