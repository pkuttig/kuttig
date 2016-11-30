
//CANVAS SLIDESHOW - ONLY USED WITH BROWSERS THAT SUPPORT CANVAS
	//SETUP CANVAS AND IMAGE VARIABLES
	var imagePaths = ["0", "1", "2", "3"];
	var showCanvas = null;
	var ctx = null;
	var img = document.createElement("img");
	var currentImg = 0;
   
    // CREATE CONNECTION VARIABLE
    var connection = navigator.connection || { 'type': '0' };
    
    // CHANGE IMAGE PATHS BASED ON CONNECTION
	switch(connection.type) {
		case connection.CELL_3G:
			//SLOW SPEEDS
			imagePaths = ["art/slideshow/low_01.jpg", "art/slideshow/low_02.jpg", "art/slideshow/low_03.jpg", "art/slideshow/low_04.jpg"];
			break;
		default:
			// WIFI, ETHERNET, UNKNOWN
			imagePaths = ["art/slideshow/high_01.jpg", "art/slideshow/high_02.jpg", "art/slideshow/high_03.jpg", "art/slideshow/high_04.jpg"];
	}


	function slideShow() {
		showCanvas = document.getElementById('slideCanvas');
		ctx = showCanvas.getContext('2d');
		img.setAttribute('width','586');
		img.setAttribute('height','440');
		img.setAttribute('id','slideImgs');
		switchImage();
		
		setInterval(switchImage, 5000);
	}
	
	function switchImage(a) {
	if(!a) {
		a = currentImg;
	}else {
		currentImg = a;
	}
	img.setAttribute('src', imagePaths[a]);
	img.onload = function() {
		if(currentImg==0) {
		document.getElementById("dot0").className = "dotGray";
		document.getElementById("dot1").className = "dot";
		document.getElementById("dot2").className = "dot";
		document.getElementById("dot3").className = "dot";		
		}else if(currentImg==1) {
		document.getElementById("dot0").className = "dot";
		document.getElementById("dot1").className = "dotGray";
		document.getElementById("dot2").className = "dot";
		document.getElementById("dot3").className = "dot";		
		}else if(currentImg==2) {
		document.getElementById("dot0").className = "dot";
		document.getElementById("dot1").className = "dot";
		document.getElementById("dot2").className = "dotGray";
		document.getElementById("dot3").className = "dot";		
		}else if(currentImg==3) {
		document.getElementById("dot0").className = "dot";
		document.getElementById("dot1").className = "dot";
		document.getElementById("dot2").className = "dot";		
		document.getElementById("dot3").className = "dotGray";				
		}
		if(currentImg == imagePaths.length-1) {
			currentImg = 0;
		}else {
			currentImg++;
		}
		ctx.drawImage(img,0,0,586,440);
	}	
}


//SHOW FUNCTION
	function show(a) {
		var x=document.getElementById(a);
		var y=x.tagName;
		if(y=="A") {
			x.style.display="inline";
		}else {
			x.style.display="block";
		}
	}
//HIDE FUNCTION
	function hide(a){
		var x=document.getElementById(a);
		x.style.display="none";
	}


//CHECKS THE FORM FOR BOT CHECK
	function checkForm(a) {
		var x=document.getElementById(a);
		var spam = document.getElementById('f_spam_y');
		if (spam.checked == true) {
			alert('You need to select "No" on the spambot section.');
			spam.focus();
			return false;
		}else {
			var q = confirm('Are you sure you wish to submit this form?');
		}
		if(q==false) {
		return false;
		}else {
		return true;
		}
	}


//ALTERS CANVAS ELEMENTS ON ABOUT PAGE
var slideIndex = 0;
var prev = 0;
var imgObj = new Image();
var repeat = 0;

	function change(a,b) {

		if(prev != 0 || a == "#") {
			var x = document.getElementById('par0'+prev);
			var y = document.getElementById('fact0'+prev);
			x.className="";
			y.className="";
			var ctxPrev = y.getContext("2d");
			ctxPrev.clearRect(0, 0, y.width, y.height);
			clearInterval(repeat);
			if(b==prev) {
				prev = 0;
				return true;			
			}
		}

		var e = document.getElementById('fact0'+b);
		var par = document.getElementById('par0'+b);
		var ctx = e.getContext("2d");
		
		if(a=='oval') {
			e.className="oval";
			par.className="show";
			prev = b;
			ctx.font = "14pt Arial";
			ctx.fillText("Eat eggs!",100, 80);
		}if(a=='rectangle') {
			grass();
			e.className='rectangle';
			imgObj.src = "art/worm.png";
			imgObj.onload = function() {
				ctx.drawImage(imgObj, 0, 100);
			}
			par.className="show";		
			prev = b;			
			repeat = setInterval(anim, 100);
		}if(a=='square') {
			e.className='square';
			par.className="show";
			prev = b;
			imgObj.src = "art/eggDrawing.png";		
			imgObj.onload = function() {
				ctx.drawImage(imgObj, 30, -30);
			};
		}if(a=='tilted') {
			e.className='tilted';
			par.className="show";		
			prev = b;
			ctx.setLineDash([5, 15]);
			ctx.beginPath(); 
			ctx.lineWidth="2";
			ctx.strokeStyle="#a0a0a0";
			ctx.moveTo(0,75);
			ctx.lineTo(300,75);
			ctx.stroke();

			ctx.setLineDash([2, 15]);
			ctx.beginPath(); 
			ctx.lineWidth="2";
			ctx.strokeStyle="#4d4d4d";
			ctx.moveTo(150,0);
			ctx.lineTo(150,200);
			ctx.stroke();		
		}
	}

		function grass(){
		var e = document.getElementById('fact02');
		var ctx = e.getContext("2d");			
		var grd = ctx.createLinearGradient(0,0,300,0);
			grd.addColorStop(0,"#0bad13");
			grd.addColorStop(1,"#fffadc");		
		ctx.fillStyle = grd;
		ctx.fillRect(0,0,800,300);
	}
var rectW = 800;
var rectX = 0;	
	function anim() {
		imgObj.src = "art/worm.png";		
		var e = document.getElementById('fact02');
		var ctx = e.getContext("2d");		
		if(rectX < e.width || rectX < 1) {
			grass();		
			imgObj.onload = function() {
				ctx.drawImage(imgObj, rectX, 100);
			};
		rectX = rectX + 5;
		}else {
			rectX = 0;
		}
	}


