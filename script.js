

window.onscroll = function (e) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight-250) {
        let bar = document.querySelectorAll(".common");
        bar.forEach((bar) => {
          let value = bar.getAttribute("data-done");
          bar.style.width = `${value}%`;
          bar.style.opacity = 1;
        });

        // let load=document.querySelector('.bar');
      }
};

let navlist = document.querySelector(".nav-list");
let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".burger");
burger.addEventListener("click" , ()=>{
    navlist.classList.toggle("v-resp");
    navbar.classList.toggle("h-resp");
    console.log("clicked");
});
    
const focuselements = document.querySelectorAll(".focus");
focuselements.forEach((focuselement)=>{
    focuselement.addEventListener("click",()=>{
      navlist.classList.toggle("v-resp");
      navbar.classList.toggle("h-resp");
    });
});
  
