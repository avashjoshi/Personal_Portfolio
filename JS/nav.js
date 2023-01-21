/**javascript function for nav bar*/
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky") //adding sticky class to the tag with id = header
  } else {
    header.classList.remove("sticky"); //removes sticky class to the tag with id = header
  }
}