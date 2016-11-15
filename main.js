var slideIndex = 0;
var prev = 0;

showDivs(slideIndex);

function advanceSlide(n) {
    showDivs(slideIndex += n);
}

function currentSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}

    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

function show(a) {
	var x=document.getElementById(a);
	var y=x.tagName;
	if(y=="A") {
		x.style.display="inline";
	}else {
		x.style.display="block";
	}
}

function hide(a){
	var x=document.getElementById(a);
	x.style.display="none";
}

function checkAll(formname, checktoggle)
{
  var checkboxes = new Array(); 
  checkboxes = document[formname].getElementsByTagName('input');
 
  for (var i=0; i<checkboxes.length; i++)  {
    if (checkboxes[i].type == 'checkbox')   {
      checkboxes[i].checked = checktoggle;
    }
  }
}

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

function shrink(a) {
	var x=document.getElementById(a);
	x.style.height="0px";
	x.style.width="0px";
}

function expand(a) {
	var x=document.getElementById(a);
	x.style.height="100%";
	x.style.width="100%";
}

function change(a,b) {

	if(prev != 0 || a == "#") {
		var x = document.getElementById('par0'+prev);
		var y = document.getElementById('fact0'+prev);
		x.className="";
		y.className="";
		var ctxPrev = y.getContext("2d");
		ctxPrev.clearRect(0, 0, y.width, y.height);
		if(b==prev) {
			prev = 0;
			return true;			
		}
	}

	var e = document.getElementById('fact0'+b);
	var par = document.getElementById('par0'+b);
	var ctx = e.getContext("2d");
	var imgObj = new Image();
	
	if(a=='oval') {
		e.className="oval";
		par.className="show";
		prev = b;
		ctx.font = "14pt Arial";
		ctx.fillText("Eat eggs!",100, 80);
	}if(a=='rectangle') {
		var grd = ctx.createLinearGradient(0,0,300,0);
			grd.addColorStop(0,"#0bad13");
			grd.addColorStop(1,"#fffadc");
		e.className='rectangle';
		par.className="show";		
		prev = b;
		ctx.fillStyle = grd;
		ctx.fillRect(0,0,800,300);
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