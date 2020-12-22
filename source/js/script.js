const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const showMore = document.querySelector('.show-more__link');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

showMore.addEventListener("click", function (evt) {
  evt.preventDefault();
});
