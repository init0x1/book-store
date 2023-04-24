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

/*features */
// JavaScript code
/****************add to cart************/
let CartIcon = document.querySelector('#cart-icon');
let Cart = document.querySelector('.cart');
let CloseCart = document.querySelector('#close-cart');
//open cart
CartIcon.onclick = () =>{
	Cart.classList.add("active");
}
//close cart
CloseCart.onclick = () =>{
	Cart.classList.remove("active");
}
//cart working js 
if (document.readyState=='loading')
{
	document.addEventListener("DOMContentLoaded", ready);
}else {
	ready();
}
//making function
function ready(){
	//remove item from cart
	var removeCartbuttons =document.getElementsByClassName('cart-remove');
	console.log(removeCartbuttons);
	for (var i=0;i < removeCartbuttons.length;i++)
	{
		var button =removeCartbuttons[i];
		button.addEventListener("click",removeCartItem);
	}
	//quantity changes
	var quantityInputs =document.getElementsByClassName("cart-quantity") ;
 for(var i=0; i < quantityInputs.length; i++){
	 var input = quantityInputs[i];
	 input.addEventListener("change" , quantityChanged);
 }
 // add To Cart
 var addCart =document.getElementsByClassName("add-cart")
 for (var i=0 ;i <addCart.length ; i++)
 {
	 var button = addCart[i];
	 button.addEventListener("click",addCartClicked);
 }
 //buy button 
 document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
}
 function buyButtonClicked()
 {
	 alert("yoyr order is placed");
	 var  cartContent = document.getElementsByClassName("cart-content")[0];
	 while(cartContent.hasChildNodes()){
		 cartContent.removeChild(cartContent.firstChild);
	 }
	 upadatetotal();
 }

 
  
//remove item from cart
function removeCartItem(event){
	var buttonClicked = event.target; 
	buttonClicked.parentElement.remove();
	upadatetotal();
}
//quantity changes 
function quantityChanged(event)
{
	var input = event.target;
	if (isNaN(input.value) || input.value <= 0)
	{
		input.value = 1;
		
	}
	upadatetotal();
}
//add to cart 
function addCartClicked(event)
{
	var button = event.target;
	var shopproducts =button.parentElement;
	var title = shopproducts.getElementsByClassName("product-title")[0].innerText;
	var price = shopproducts.getElementsByClassName("price")[0].innerText;
	var productImg  = shopproducts.getElementsByClassName("product-img")[0].src;
	addProductToCart(title,price,productImg);
	upadatetotal();
}

function addProductToCart(title,price,productImg)
{
	var cartshopbox = document.createElement("div");
	cartshopbox.classList.add("cart-box");
	var cartItems = document.getElementsByClassName("cart-content")[0]
	var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
	for (var i = 0 ;i < cartItemNames.length ; i++)
	{
		if (cartItemNames[i].innerText == title){
		alert("you have already add this to cart");
		return;
	}
}

var cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img">
   <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
      <input type ="number" value="1" class="cart-quantity">
    </div>
    <div class ="fa fa-trash cart-remove"id ="cart-remove"></div>`;

cartshopbox.innerHTML = cartBoxContent;
cartItems.append(cartshopbox);
cartshopbox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
cartshopbox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);
/*upadatetotal();*/
}
//update total 
function upadatetotal()
{
	var CartCount =document.getElementsByClassName("cart-content")[0];
	var CartBoxs =CartCount.getElementsByClassName("cart-box");
	var total =0 ;
	for (var i=0;i < CartBoxs.length;i++){
		var cartbox = CartBoxs[i];
		var priceElement = cartbox.getElementsByClassName("cart-price")[0];
		var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
		var price = parseFloat(priceElement.innerText.replace("$", ""));
		var quantity = quantityElement.value;
		total = total +(price *quantity);
	}
		//if price conatin some cents value
		total = Math.round(total*100) / 100;
		
		document.getElementsByClassName("total-price")[0].innerText = "$" + total;
	
	
}
/*cart ends*/

/*arrivals starts*/

const learnMoreButtons = document.querySelectorAll('.f_btn');   // get all the "learn more" buttons

// Loop through each button and add an event listener
learnMoreButtons.forEach(button => {
  button.addEventListener('click', displayBookInfo);
});

// Function to display book information
function displayBookInfo(event) {
  // Get the parent element of the clicked button
  const parentElement = event.target.parentElement;

  // Get the book title and author
  const title = parentElement.querySelector('h2').textContent;
  const author = parentElement.querySelector('.writer').textContent;

  // Get the book category
  let category = '';
  const categoryElement = parentElement.querySelector('.categories');
  if (categoryElement) {
    category = categoryElement.textContent;
  }

  // Create a message with the book information
  let message = `Title: ${title}\nAuthor: ${author}`   ;
  if (category) {
    message += `\nCategory: ${category}`;
  }

  alert(message);     // Display the message to the user
}
/*reqbok ends

const intro= document.querySelector('.intro');
const btn= document.querySelector('.rbtn toggle');

btn.addEventListener('click',()=>{
intro.classList.toggle("active");

});*/
document.addEventListener('DOMContentLoaded', () => {
	const intro= document.querySelector('.intro');
	const btn= document.querySelector('.toggle');
  
	btn.addEventListener('click', () => {
	  intro.classList.toggle("active");
	});
  });
  
