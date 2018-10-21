
var li_Hiden = document.getElementsByClassName("accordion");
var i;

for (i = 0; i <  li_Hiden.length; i++)  {
 	 li_Hiden[i].addEventListener("click", function() {
 	 	

 	 	var panel = this.nextElementSibling;
 	 	if (panel.style.maxHeight) {
 	 		panel.style.maxHeight = null;
 	 	}
 	 	else{
 	 		panel.style.maxHeight = panel.scrollHeight + "px";
 	 	}

 	 });
}

var btn_up = document.querySelector('.btn-up');
var btn_down = document.querySelector('.btn-down');
var count;

var total_comment =  document.querySelectorAll('.comment');

btn_down.addEventListener('click', function () {
	for (count = 0; count < total_comment.length; count++) {
				if (total_comment[count].style.order) {
			total_comment[count].style.order = count + 3;
			return;
		}
}
})