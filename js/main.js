
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