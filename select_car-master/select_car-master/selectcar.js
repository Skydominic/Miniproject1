
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}

var modal = document.getElementById("myModal");
var modaltwo = document.getElementById("myModaltwo");
var modalthree = document.getElementById("myModalthree");
var modalfour = document.getElementById("myModalfour");
var btn = document.getElementById("myBtn");
var btntwo = document.getElementById("myBtntwo");
var btnthree = document.getElementById("myBtnthree");
var btnfour = document.getElementById("myBtnfour");
var span = document.getElementsByClassName("close")[0];
var spantwo = document.getElementsByClassName("close")[1];
var spanthree = document.getElementsByClassName("close")[2];
var spanfour = document.getElementsByClassName("close")[3];
var hide = document.getElementById("hidewhenclicked");
var vid = document.getElementById("myVideo");

btn.onclick = function() {
  modal.style.display = "block";
  hide.style.overflow = "hidden";
}
btntwo.onclick = function() {
  modaltwo.style.display = "block";
  hide.style.overflow = "hidden";
}
btnthree.onclick = function() {
  modalthree.style.display = "block";
  hide.style.overflow = "hidden";
  vid.play();
}
btnfour.onclick = function() {
  modalfour.style.display = "block";
  hide.style.overflow = "hidden";
}
span.onclick = function() {
  modal.style.display = "none";
  hide.style.overflow = "auto";
}
spantwo.onclick = function() {
  modaltwo.style.display = "none";
  hide.style.overflow = "auto";
}
spanthree.onclick = function() {
  modalthree.style.display = "none";
  hide.style.overflow = "auto";
  vid.pause();
}
spanfour.onclick = function() {
  modalfour.style.display = "none";
  hide.style.overflow = "auto";
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


