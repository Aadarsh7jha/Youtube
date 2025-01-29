let three_line = document.querySelector(".menu-bar");
let menu =document.querySelector(".navbar");
let navbar_dropdown = document.querySelector(".navbar-dropdownZ");
let navbar_dropdown2 = document.querySelector(".navbar-dropdown2");

 three_line.addEventListener("click",()=>{
   menu.classList.toggle("active")
   three_line.classList.toggle("active")
 })

 document.querySelector(".edu").addEventListener("click",()=>{
   navbar_dropdown.classList.toggle("active")
   navbar_dropdown2.classList.remove("active")
 })

 document.querySelector(".edu2").addEventListener("click",()=>{
   navbar_dropdown2.classList.toggle("active")
   navbar_dropdown.classList.remove("active")
 })

