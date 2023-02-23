let pageTwoNavBtn = document.getElementById('nav-page2')
let section2 = document.getElementById('section2')
let landingPage = document.getElementById('landingPage')



let textHolderLeft = document.getElementById('text-holder')
let textHolderRight = document.getElementById('text-holder2')


pageTwoNavBtn.addEventListener("click",()=>{
    textHolderLeft.style.display = "none"
    textHolderRight.style.display = "none"
    landingPage.style.display = "none"
    section2.style.display = "flex"
    textHolderLeft.innerText = "JAVA"
    textHolderRight.innerText = "SCRIPT"

})