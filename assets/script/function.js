var slideIndex = 0;
showSlides();

function showSlides() {
  var index;
  var images = document.getElementsByClassName("mySlides");
  var circles = document.getElementsByClassName("dot");
  for (index = 0; index < 3; index++) {
    images[index].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > images.length) {slideIndex = 1}    
  for (index = 0; index < circles.length; index++) {
    circles[index].className = circles[index].className.replace(" active", "");
  }
  images[slideIndex-1].style.display = "block";  
  circles[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
}

// on mouseover
let img = document.querySelector('img');
let start = img.src;
let hover = img.getAttribute('data-hover'); //specified in img tag

img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } //to revert back to start