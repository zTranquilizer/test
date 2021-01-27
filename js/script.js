

document.addEventListener("DOMContentLoaded", function () {
	document.querySelector('.header-menu__icon').addEventListener('click', function (event) {
		document.querySelector('.header-menu__icon').classList.toggle('active');
		document.querySelector('.header-menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');
	});
	headerMove();
});
function headerMove() {

	document.addEventListener('scroll', function (params) {
		let scrollFromTop = window.scrollY;


		if (scrollFromTop > 65) {
			document.querySelector('.header').classList.add('fixed');
		} else {
			document.querySelector('.header').classList.remove('fixed');
		}



	})
}