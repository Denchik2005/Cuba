const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('active');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	const slides = document.querySelectorAll(".mySlides");
	const dots = document.querySelectorAll(".dot-curs");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1){
		slideIndex=slides.length
	}
	for (i=0; i < slides.length ; i++){
		slides[i].style.display= "none";
	}

	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");		
	}

	slides[slideIndex - 1].style.display= "block";
	dots[slideIndex - 1].className += " active";
}
