
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


function test () {

														if( getComputedStyle(total_comment[0]).top == '0px' ){
				 	 											btn_up.style.display = 'none';
				 	 										}
				 	 										else {
				 	 											btn_up.style.display = 'block';
				 	 										}
				 	 										if( getComputedStyle(total_comment[total_comment.length-1]).top == '240px' ){
				 	 											btn_down.style.display = 'none';
				 	 										}
				 	 										else {
				 	 											btn_down.style.display = 'block';
				 	 										}
}
									





btn_up.addEventListener('click', function () {
		var start = Date.now();	
				 	 
				 	 var timer = setInterval(function(){
				 	 																																										// animation
				 	 								for (count = 0; count < total_comment.length; count++){
				 	 									var computedStyle = getComputedStyle(total_comment[count]);
				 	 						
				 	 									var timePassed = Date.now() - start;
				 	 									total_comment[count].style.top = (parseInt(computedStyle.top) + 24  ) + 'px' ;
				 	 									if (timePassed >= 200) {
				 	 										test();	
				 	 										clearInterval(timer);
				 	 									}

				 	 				}
				 	 		
				 },20);
						
		}
		)


btn_down.addEventListener('click', function () {

		var start = Date.now();	
				 	 
				 	 var timer = setInterval(function(){
				 	 																																										// animation
				 	 								for (count = 0; count < total_comment.length; count++){
				 	 									var computedStyle = getComputedStyle(total_comment[count]);
				 	 										
				 	 									var timePassed = Date.now() - start;
				 	 									total_comment[count].style.top = (parseInt(computedStyle.top) - 24  ) + 'px' ;
				 	 									if (timePassed >= 200) {
				 	 										test();	
				 	 										clearInterval(timer);
				 	 									}
				 	 									

				 	 				}
				 	 		
				 },20);
				 	 									
				
		}
		)
		
				 	
				 		
				 	
				 		
				 		

				 		

				  
