const ham = document.querySelector("#ham")
const navi = document.querySelector(".navi")
const nav = document.querySelector("nav")
const book_btn = document.querySelectorAll(".book")
const select = document.querySelector("#service")
const navigations = document.querySelectorAll(".navi ul li a")

ham.addEventListener("click", e => {
    navi.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 20) {
        nav.classList.add("nav-active")
    }
    else {
        nav.classList.remove("nav-active")
    }
})

book_btn.forEach(btn => {
    btn.addEventListener("click", e => {
        select.value =  btn.parentElement.parentElement.querySelector("h1").innerText
    })
})

navigations.forEach(navigation => {
    navigation.addEventListener("click", () => {
        navi.classList.remove("active");
    })
})