
'use strict';


function requireAll(r) { r.keys().forEach(r); } //import files for webpack
requireAll(require.context('./img/', true));

import "./css/main.css";
import "./css/normalize.css";
import {simpleAccordion} from './accordion';
import {commentSlider} from './comment-slider';
import {teamSlider} from "./team-slider";
import {humburger} from "./humburger";


simpleAccordion();
commentSlider();
teamSlider();
humburger();


window.onscroll =  () => {

	let header = document.querySelector('.header-bar');

	if(window.pageYOffset > 200	){
			header.classList.add('header-fixed');
}
else{
	header.classList.remove('header-fixed');
}
}


