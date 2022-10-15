// const navbar = document.querySelector(".search-form");
// const btn = document.querySelector("#search-btn");

// function bunn(){
//     navbar.classList.toggle('.active')
// }

// btn.addEventListener("click",bunn)



let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = ()=>{
    searchForm.classList.toggle("active");
    shoppingcart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");

    
}

let shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingcart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");

};

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingcart.classList.remove("active");
  navbar.classList.remove("active");

};

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {

  searchForm.classList.remove("active");
  shoppingcart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.toggle("active");

};

window.onscroll =() =>{

  searchForm.classList.remove("active");
  shoppingcart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");

}


 var swiper = new Swiper(".product-slider", {
  loop:true,
   spaceBetween: 20,
   breakpoints: {
     0: {
       slidesPerView: 1,
      
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
 
   },
 });

 var swiper = new Swiper(".review-slider", {
  loop:true,
   spaceBetween: 20,
   breakpoints: {
     0: {
       slidesPerView: 1,
      
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
 
   },
 });

// themes

const icon = document.querySelector(".icon1")

icon.addEventListener('click', function(){
  if(document.body.classList.toggle("theme"));
 else if( document.body.classList.toggle("theme1"));
})

















//  var typed = new Typed(".auto-type", {
//    strings: ["Egn", "'Eng'", "'Cooder'", "'Developer'", "'Game-Developer'"],
//    typeSpeed: 100,
//    backSpeed: 100,
//    loop: true,
//  });


























































