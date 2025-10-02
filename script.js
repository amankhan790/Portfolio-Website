const sideBar = document.querySelector(".side-bar");
const sideBarIcon = sideBar.querySelector("i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const modeBtn = document.querySelector(".toggle-btn-container i");
const introBtn = document.querySelector(".intro-toggle i");
const aboutBtn = document.querySelector(".about-toggle i");
const educationBtn = document.querySelector(".education-toggle i");
const projectBtn = document.querySelector(".project-toggle i");
const skillsBtn = document.querySelector(".skills-toggle i");
const contactBtn = document.querySelector(".contact-toggle i");

// var tl = gsap.timeline();

// tl.from("nav h2,nav ul,nav .toggle-btn-container,.side-bar", {
//   y: "-40px",
//   opacity: 0,
//   duration: 0.7,
//   // delay: 1,
//   stagger:0.15
// });
// tl.from(".hero-heading,.smalltext",{
//   x:-150,
//   opacity:0,
//   duration:0.8,
//   stagger:0.15
// },"-=-0.3")

// tl.from(".hero-footer",{
//   y:"40px",
//   opacity:0,
//   duration:1
// },"-=4")


modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});
introBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});
aboutBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});
educationBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});
projectBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});
skillsBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});
contactBtn.addEventListener("click", () => {
  document.body.classList.toggle("white-theme");
});

sideBar.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  sideBarIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
