let toggle = document.getElementById('toggle')
let nav = document.getElementById('nav')
let position = document.getElementById('position')
let socialIcon = document.getElementsByClassName("socialIcon")


toggle.addEventListener("click",()=>{
    position.style.color = "black"
    nav.style.background = "black"
    document.body.style.background = "white"
})