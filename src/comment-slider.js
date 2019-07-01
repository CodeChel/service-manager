export function commentSlider(){
const btn_up = document.querySelector('.btn-up');
const btn_down = document.querySelector('.btn-down');



const containerComment = document.querySelector('.comment-container');

function test() {

	if (parseInt(getComputedStyle(containerComment).top) >= 0) {
		btn_up.disabled = true;
		btn_up.style.backgroundImage = "url(img/keyboard_arrow_up_grey.png)";
	}
	else {
		btn_up.disabled = false;
		btn_up.style.backgroundImage = "url(img/keyboard_arrow_up.png)";
	}
	if (parseInt(getComputedStyle(containerComment).top) == -480) {
		btn_down.disabled = true;
		btn_down.style.backgroundImage = "url(img/keyboard_arrow_down_grey.png)";
	}
	else {
		btn_down.disabled = false;
		btn_down.style.backgroundImage = "url(img/keyboard_arrow_down.png)";
	}
}

let timerBtnUp = 0;
let timerBtnDown = 0;

btn_up.addEventListener('click',  () => {
	if(timerBtnUp == 0){
	let computedStyle = getComputedStyle(containerComment);
	
	containerComment.style.top = (parseInt(computedStyle.top) + 240) + 'px';
	timerBtnUp = setTimeout( () => {
		test();
		timerBtnUp = 0;
	},350);
	
	}
})

btn_down.addEventListener('click',  () => {
	if(timerBtnDown == 0){
	let computedStyle = getComputedStyle(containerComment);

	containerComment.style.top = (parseInt(computedStyle.top) - 240) + 'px';
	timerBtnDown = setTimeout( () => {
		test();
		timerBtnDown = 0;
	},350);
}
})
}