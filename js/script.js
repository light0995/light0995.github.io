const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu__close');
const percents = document.querySelectorAll('.work__diagram-number');
const loadElements = document.querySelectorAll('.work__diagram-load');
const portfolio = document.querySelector('.portfolio');
const promoBtn = document.querySelector('.promo__btn');
const promo_aboutBtn = document.querySelector('.promo__about-btn');
const about = document.querySelector('.about');

$('.menu__link a').on('click', function (event) {
    event.preventDefault();
    const target = $(this).data('target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500)
})

promo_aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    about.scrollIntoView({behavior: 'smooth'});
})

promoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    portfolio.scrollIntoView({behavior: 'smooth'});
})


hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('active');
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('active');
})

percents.forEach((item, i) => {
    loadElements[i].style.width = item.innerHTML;
})