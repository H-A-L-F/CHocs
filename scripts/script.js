var slidePosition = 1;
carouseler(slidePosition);

function switchCar(n) {
  carouseler(slidePosition += n);
}

//  images controls
function gotoCar(n) {
  carouseler(slidePosition = n);
}

function carouseler(n) {
  var i;
  var slides = document.getElementsByClassName("carousel_card");
  var circles = document.getElementsByClassName("dots");
//   console.log(slides);
//   console.log(slides.length);
//   console.log(circles);

  if (n > slides.length) slidePosition = 1
  if (n < 1) slidePosition = slides.length

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 