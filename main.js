const sectionRow = document.querySelectorAll('.section-content-row');
const dropdownMenu = document.querySelector('.menu-dropdown-mobile');
const dropdownMenuButton = document.querySelector('.menu-wrapper-mobile i');

// Scroll Animation

const scrollAnimation = () => {
	window.pageYOffset > 400 || window.matchMedia('(min-height: 1000px)').matches
		? sectionRow[0].classList.add('slide-in-up')
		: sectionRow[0].classList.remove('slide-in-up');

	window.pageYOffset > 834 || window.matchMedia('(min-height: 1000px)').matches
		? sectionRow[1].classList.add('slide-in-up')
		: sectionRow[1].classList.remove('slide-in-up');
};

document.addEventListener('scroll', scrollAnimation);

// Remove on Mobile
window.matchMedia('(max-width: 815px)').matches
	? document.removeEventListener('scroll', scrollAnimation)
	: null;

dropdownMenuButton.addEventListener('click', () => {
	dropdownMenuButton.classList.toggle('active');
	dropdownMenu.classList.toggle('active');
});
