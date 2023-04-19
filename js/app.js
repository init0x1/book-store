/*nav ba*/

var toggleBtn = document.getElementById("toggle-menu");
  var menu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", function() {
    toggleBtn.classList.toggle("active");
    menu.classList.toggle("show");
  });


  /* slider images in home*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("fristsec_img")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 3000);
}


      /*login*/
      var loginForm = document.querySelector('.login_form');

    document.querySelector('#login-btn').onclick = () =>{

     loginForm.classList.toggle('active');
}

    document.querySelector('#close-login-btn').onclick = () =>{

    loginForm.classList.remove('active');
}

