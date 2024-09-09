/*Variable*/
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const img = document.querySelector('.banner-img')
const txt = document.querySelector('p')
let index = 0
const dot = document.querySelectorAll('.dot')
const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*dot selected*/
function activieDot() {
	for (let i = 0; i < slides.length; i++) {
		if (i == index) {
			dot.classList.add(dot_selected)
		}
	}
}


/*click left*/
function clickleft() {
	arrowLeft.addEventListener('click', () => {
		dot[index].classList.remove("dot_selected")
		index--
		if (index < 0) {
			index = slides.length - 1
		}
		dot[index].classList.add("dot_selected")
		img.src = slides[index].image
		txt.innerHTML = slides[index].tagLine
	})
}
clickleft()

/*click right*/
function clickRight() {
	arrowRight.addEventListener('click', () => {
		dot[index].classList.remove("dot_selected")
		index++
		if (index > slides.length - 1) {
			index = 0
		}
		dot[index].classList.add("dot_selected")
		img.src = slides[index].image
		txt.innerHTML = slides[index].tagLine
	})
}
clickRight()