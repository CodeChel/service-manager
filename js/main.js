
var liHiden = document.getElementsByClassName('.open ');
var hidenElement = document.getElementsByClassName('.open-block');
function toggle(el) {
  el.style.display = (el.style.display == 'none') ? 'block' : 'none';
}

liHiden.onclick = function() {

	hidenElement.style.display = toggle(hidenElement);
}