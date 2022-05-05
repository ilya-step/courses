// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
var windowInnerWidth = window.innerWidth;
function resize() {
	windowInnerWidth = window.innerWidth;
}
window.onresize = resize;
window.onscroll = function () {
	// выполняется только когда экран больше 700px
	if (windowInnerWidth > 700) {
		var currentScrollPos = window.pageYOffset;
		// проверка прокрутки
		if (prevScrollpos < 40) {
			document.getElementById("navbar").classList.remove('_active');
			document.getElementById("navbar").style.paddingBottom = '0px';
		} else {
			document.getElementById("navbar").classList.add('_active');
			document.getElementById("navbar").style.paddingBottom = document.getElementById("header-fixed").offsetHeight + 'px';
		}
		prevScrollpos = currentScrollPos;
	}
}


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на элемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			document.body.classList.toggle('_lock')
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}




// плавная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}


// Попап
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
if (selector.length > 0) {
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);
	let selector2 = document.querySelector('input[type="tel"]');
	selector2.addEventListener('input', function () {
		const re = /^\d*(\.\d+)?$/
	});
}


// стилизация select
(function ($) {
	$(function () {
		$('select').styler();
	});
})(jQuery);


// слайдер на три карточки
$('.slider-three').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	swipeToSlide: true,  // разрешить пролистывать свайпом более заданного slidesToScroll
	waitForAnimate: false,  // не ждать анимацию при принудительной прокрутке
	arrows: true,
	responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});