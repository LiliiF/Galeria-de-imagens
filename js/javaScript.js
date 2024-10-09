const hamburguer = document.querySelector(".hamburguer");
const navBar = document.querySelector(".navbar");

hamburguer.addEventListener("click", ()=>{
    navBar.classList.toggle("expanded")
})