// Slideshows
var slideIndex = 0;
autoSlide();

/*slides auto play */
function autoSlide() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");	

	//hide other slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}

	slideIndex++;

	//show slides
	if (slideIndex > slides.length) {
		slideIndex = 1
	}

	//dots --> dots active
	for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	
	// Change image every 4 seconds
	setTimeout(autoSlide, 4000); 

}


// slides controls by button
function nextSlides(n) {
	showSlides(slideIndex += n);
}	


function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {
		slideIndex = 1
	}
	
	if (n < 1) {
		slideIndex = slides.length
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}



