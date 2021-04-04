


// Show/Hide Nav on scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("cath-nav").style.top = "0";
  } else {
    document.getElementById("cath-nav").style.top = "-165px";
  }
  prevScrollpos = currentScrollPos;
}


// Add class to nav on scroll 

window.addEventListener("scroll", function(e) {
    var nav = document.getElementById("cath-nav");
    if (
      document.documentElement.scrollTop >= 200 ||
      document.body.scrollTop > window.innerHeight
    ) {
      nav.classList.add("nav-colored");
      nav.classList.remove("nav-transparent");
    } else {
      nav.classList.add("nav-transparent");
      nav.classList.remove("nav-colored");
    }
});



// Show/hide Mobile nav menu


const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('cross');
const navmobContainer = document.getElementById('navmob-container');

const handleNav = () => {
    navmobContainer.classList.toggle('nav-active');
}



navOpen.addEventListener('click', handleNav);
navClose.addEventListener('click', handleNav);