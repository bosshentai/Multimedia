var slideIndex = 1;

function plusSlide(n) {
  showSlides((slideIndex += n));

//   console.log("here " + n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides-container");

  if (n > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
