let hamBtnContainer = document.querySelector('.hamburger-menu-container')
let hamBtn = document.querySelector('.hamburger-menu')
let mobileNavigation = document.querySelector('.navigation-mobile')
let navList = document.querySelector('.navigation__list')
let body = document.querySelector('body')

hamBtnContainer.addEventListener('click', ()=>{
    mobileNavigation.classList.toggle('navigation_disabled')
    mobileNavigation.classList.toggle('navigation_enabled')
    hamBtn.classList.toggle('hamburger-menu_active')
    body.classList.toggle('active')
})

navList.addEventListener('click', ()=>{
    mobileNavigation.classList.toggle('navigation_enabled')
    mobileNavigation.classList.toggle('navigation_disabled')
    hamBtn.classList.toggle('hamburger-menu_active')
    body.classList.toggle('active')
})

addEventListener('resize', () => {if (window.innerWidth >= 700){
    mobileNavigation.classList.remove('navigation_enabled')
    hamBtn.classList.remove('hamburger-menu_active')
    mobileNavigation.classList.add('navigation_disabled')
    body.classList.remove('active')
}})
