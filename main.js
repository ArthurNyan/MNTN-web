const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
body= document.body;


// Клик по кнопке 
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle("no-scroll");
}) 

// Клик по пустому кроме навигации
window.addEventListener('click', function  (){
    console.log('click on window')

    if(body.classList.contains('no-scroll')){
        mobileNav.classList.toggle('mobile-nav-active');
        navBtn.classList.toggle('nav-button-close');
        body.classList.toggle("no-scroll");
    }
})
// отмена поднятия по 
mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})