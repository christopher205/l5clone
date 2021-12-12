function AddClass() {
    document.querySelector('.navbar')
    .classList.add('nav-scrolled')
    document.querySelector('.header-row')
    .classList.add('header-row-scrolled')
    document.querySelector('.last-row')
    .classList.add('last-row-scrolled')
}
function RemoveClass() {
    document.querySelector('.navbar')
    .classList.remove('nav-scrolled')
    document.querySelector('.header-row')
    .classList.remove('header-row-scrolled')
    document.querySelector('.last-row')
    .classList.remove('last-row-scrolled')
}

module.exports = { AddClass, RemoveClass }