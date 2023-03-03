let mobileToggleMenu = document.getElementById('mobile-toggle-menu')
let mobileNav = document.getElementById('mobile-nav')
let mobileClose = document.getElementById('mobile-close-nav')




mobileToggleMenu.addEventListener("click",()=>{
   
    mobileNav.style.top = "0%"
  
})

mobileClose.addEventListener("click",()=>{

    mobileNav.style.top = "-100%"
})




