let humburgerBtn = document.getElementById("humburger")
let mobileNav = document.getElementById("mobile-nav")
let closeBtn = document.getElementById("close")

humburgerBtn.addEventListener("click", ()=>{
    mobileNav.style.display = "block"
})

closeBtn.addEventListener("click", ()=>{
    mobileNav.style.display = "none"
})