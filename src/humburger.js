


export function humburger() {
const humburger = document.querySelector('.humburger');
const menuNav  = document.querySelector('.menu-nav');
const headerBar = document.querySelector('.header-bar');
const body = document.querySelector('BODY');




humburger.addEventListener('click', () => {
	humburger.classList.toggle('open-humburger');
	menuNav.classList.toggle('open-menu');
	
	headerBar.classList.toggle('header-bar-full');
	body.classList.toggle('overflow-body');
	menuNav.classList.toggle('overflow-menu');
}
)
menuNav.addEventListener('click', (e) => {
	if(e.target.tagName == 'A' && humburger.classList.contains('open-humburger')) humburger.click();

})


window.addEventListener('resize', () =>{
	if(document.body.offsetWidth > 992){
	humburger.classList.remove('open-humburger');
	menuNav.classList.remove('open-menu');
	headerBar.classList.remove('header-bar-full');
	body.classList.remove('overflow-body');
	menuNav.classList.remove('overflow-menu');
	}
	
	
})

}