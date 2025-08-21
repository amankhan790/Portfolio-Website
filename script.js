const sideBar = document.querySelector(".side-bar");
const sideBarIcon = sideBar.querySelector("i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const modeBtn = document.querySelector(".toggle-btn-container i");
const heroSection = document.querySelector("#hero-section");


modeBtn.addEventListener("click", () => {
    heroSection.style.background = "white";
})

sideBar.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    sideBarIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    
});
