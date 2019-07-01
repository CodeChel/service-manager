export function teamSlider(){
const imgComments = document.querySelector('.img-comments');

imgComments.addEventListener('click', (e) => {
	if(e.target.classList.contains('img-member')){
		if(e.target.classList.contains('img-member-main')) return;

		const mainMember = document.querySelector('.img-member-main');
		mainMember.classList.remove('img-member-main');
		mainMember.classList.add('img-shadow-member');
		e.target.classList.add('img-member-main');
		e.target.classList.remove('img-shadow-member');
		const currentlyPosition = getComputedStyle(e.target).left;
		const mainMemberPosition = getComputedStyle(mainMember).left;
		e.target.style.left = mainMemberPosition;
		mainMember.style.left = currentlyPosition;

		e.target.nextElementSibling.classList.remove('visually-hidden');
		mainMember.nextElementSibling.classList.add('visually-hidden');
		
    }
    
window.addEventListener('resize', () =>{
	
	const imgMember2 = document.querySelector('.img-member-2');
	imgMember2.click();
	const imgMemberArr = document.querySelectorAll('.img-member');
	imgMemberArr.forEach((member) =>{
		member.style.left = '';
		
	})
	

	
})

})
}