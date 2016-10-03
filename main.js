var slideIndex = 0;

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
  var dots = document.getElementsByClassName("dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("dotGray", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "dotGray";
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
	x.style.display="block";
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