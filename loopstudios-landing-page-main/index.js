let humburgerBtn = document.getElementById("humburger")
let mobileNav = document.getElementById("mobile-nav")
let closeBtn = document.getElementById("close")
let body = document.body

humburgerBtn.addEventListener("click", ()=>{
    mobileNav.style.display = "block";
    body.style.overflow = "hidden"
})

closeBtn.addEventListener("click", ()=>{
    mobileNav.style.display = "none"
    body.style.overflow = "scroll"
})