/*nav ba*/

var toggleBtn = document.getElementById("toggle-menu");
  var menu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", function() {
    toggleBtn.classList.toggle("active");
    menu.classList.toggle("show");
  });
      /*login*/
      var loginForm = document.querySelector('.login_form');

    document.querySelector('#login-btn').onclick = () =>{

     loginForm.classList.toggle('active');
}

    document.querySelector('#close-login-btn').onclick = () =>{

    loginForm.classList.remove('active');
}
   