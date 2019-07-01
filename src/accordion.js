
export function simpleAccordion() {
const acordion = document.querySelector(".accordion");


acordion.addEventListener('click', (e) => {
	if(e.target.classList.contains('accordion-item')){
		let hidenBlock = e.target.nextElementSibling;
		if (hidenBlock.style.maxHeight) {
			hidenBlock.style.maxHeight = null;
		}
		else {
			hidenBlock.style.maxHeight = hidenBlock.scrollHeight + "px";
		}

	}
} )
}

