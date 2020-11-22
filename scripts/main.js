/*
헤드를 Hello World로 바꿈
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*
변수는 여러 자료형 표현 가능
var myVariable = 'Bob';
myVariable = 'Steve';
var bool1 = true;
var arr1 = [1,'Apple']
*/

/*
html 페이지 전체를 변수로 선택
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

var myImage = document.querySelector('img');

var myButton = document.getElementById('nameButton');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('네 이름을 알려줘!');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '어서와 ' + myName + '! 반가워 ^^';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '어서와 ' + storedName + '! 반가워 ^^';
}

myButton.onclick = function() {
  setUserName();
}
