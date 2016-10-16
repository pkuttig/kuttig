
/*Facts01 - Egg function*/

var w=60;
var h=60;
var b=30;
var bg=20;
var myVar;



function bigger() {
var a = document.getElementById('fact01');	
	if(w<200) {
		w = w+1;
		h = h+1.5;
		b = b-25;
		bg = bg+2;
		a.style.width = w +"px";
		a.style.height = h + "px";
		a.style.borderWidth = b + "px";
		a.style.background = "rgb(253,246," + bg + ")";
		if(w==200) {
			a.style.background="#fff";
			a.style.border="1px solid #999";
		}
	}
}

function startFunc() {
	myVar = setInterval(bigger, 20);
}
