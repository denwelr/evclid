
"use strict";

const searchForm = document.forms.searchForm;
const searchInput = searchForm.query;

const searchBtn = document.querySelector('.header__search-btn_search');
const searchCloseBtn = document.querySelector('.header__search-btn_close');

searchBtn.addEventListener('click', event => {
    if(document.documentElement.clientWidth < 735) {

        console.log('тест');
        const query = prompt('Введите поисковый запрос в поле ниже.');
        console.log(query);

        if(!query || !query.length) return;

        searchInput.value = query;
        return searchForm.submit();
    }
    if(searchForm.classList.contains('header__search-form_focus')) {
        return searchForm.submit();
    }
    searchForm.classList.add('header__search-form_focus');
    searchInput.focus();
});

searchCloseBtn.addEventListener('click', () => {
    searchForm.classList.remove('header__search-form_focus');
});


document.addEventListener('mousedown', event => {
    if(event.target.tagName === 'A' || event.target.tagName === 'BUTTON') event.preventDefault();
});



/* header-slider */
$('.header__slider').slick({
    arrows: false,
    infinity: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
});



/* burger menu */

const burgerMenu = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', event => {
    document.body.classList.toggle('lock');
    burgerMenu.classList.toggle('header__burger_active');
    headerNav.classList.toggle('header__nav_burger');
});

headerNav.addEventListener('click', event => {
    if(event.target.closest('.header__link')) {
        document.body.classList.remove('lock');
        burgerMenu.classList.remove('header__burger_active');
        headerNav.classList.remove('header__nav_burger');
    }
});

// TABS


const tabsPlugin = () => {
    const tabs = document.querySelectorAll('.our-work__tab');

    const resetAllControls = () => {
        tabsControls.forEach(control => {
            control.classList.remove('our-work__tabs-control_active');
        });
    };

    const tabsControls = document.querySelectorAll('.our-work__tabs-control');
    
    tabs[0].style.display = 'flex';
    tabsControls[0].classList.add('our-work__tabs-control_active');

    tabsControls.forEach(control => {
        control.addEventListener('click', event => {
            const tabNumber = control.dataset.tab;

            resetAllControls();
            control.classList.add('our-work__tabs-control_active');

            tabs.forEach(tab => {
                tab.style.display = 'none';
            });
            tabs[tabNumber - 1].style.display = 'flex';
        });
    });
}
tabsPlugin();


// SPOILERS
 
const answersBody = document.querySelector('.answers');

answersBody.addEventListener('click', event => {
    const target = event.target.closest('.answer__header');
    if(!target) return;

    target.parentElement.classList.toggle('answer_active');
});

// ADAPTIVE

window.addEventListener('resize', event => {
    if(window.innerWidth <= 320) {
        const previewBody = document.querySelectorAll('.about__advantages-item_preview .about__advantages-item-body');

        previewBody.forEach(body => { 
            body.parentElement.after(body);
        });
    }
});

/* ПЛАВНЫЙ СКРОЛЛ */
document.body.addEventListener('click', function(event){
    const target = event.target;
    if(target.tagName !== 'A') return;

    const targetElement = document.getElementById(target.getAttribute('href').slice(1));
    
    if(targetElement === null) return;
    event.preventDefault();

    targetElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    })
});
/* /ПЛАВНЫЙ СКРОЛЛ */

/* КНОПКА НАВЕРХ */

const upBtn = document.querySelector('.up-btn');

const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

window.addEventListener('scroll', function(){
    if(scrollY > (scrollHeight - 1000) && !upBtn.classList.contains('up-btn_active')) {
        upBtn.classList.add('up-btn_active')
    } 
    else if(scrollY < (scrollHeight - 1000) && upBtn.classList.contains('up-btn_active')) {
        upBtn.classList.remove('up-btn_active')
    }
});
upBtn.addEventListener('click', event => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

/* /КНОПКА НАВЕРХ */