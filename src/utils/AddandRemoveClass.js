function AddClass() {
    document.querySelector('.navbar')
    .classList.add('nav-scrolled')
    document.querySelector('.header-row')
    .classList.add('header-row-scrolled')
    document.querySelector('.last-row')
    .classList.add('last-row-scrolled')
    document.querySelector('.logo')
    .classList.add('logo-scrolled')
    document.querySelectorAll('.link').forEach(link => {
        link.classList.add('link-scrolled')
    })
}
function RemoveClass() {
    document.querySelector('.navbar')
    .classList.remove('nav-scrolled')
    document.querySelector('.header-row')
    .classList.remove('header-row-scrolled')
    document.querySelector('.last-row')
    .classList.remove('last-row-scrolled')
    document.querySelector('.logo')
    .classList.remove('logo-scrolled')
    document.querySelectorAll('.link').forEach(link => {
        link.classList.remove('link-scrolled')
    })
    
}

module.exports = { AddClass, RemoveClass }