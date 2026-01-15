// ======================================
// DOM ELEMENTS
// ======================================
const main = document.querySelector("main");

const sideBarIcon = document.querySelector(".side-bar i");
const dropdownMenu = document.querySelector(".dropdown-menu");
const navList = document.querySelector(".nav-list");

const modeButtons = document.querySelectorAll(
  ".mode-btn, .toggle-btn-container i, .intro-toggle i, .about-toggle i, .education-toggle i, .project-toggle i, .skills-toggle i, .contact-toggle i"
);

// ======================================
// CURSOR FOLLOW ANIMATION
// ======================================
main.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    duration: 1,
  });
});

// ======================================
// PAGE LOAD ANIMATION
// ======================================
function firstPageAnimation() {
  const tl = gsap.timeline();

  tl.from("nav h2, nav ul, nav .toggle-btn-container, .side-bar", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });

 tl.from(
  ".hero-heading, .smalltext",
  {
    x: -100,              // shorter travel = faster feel
    opacity: 0,
    duration: 0.4,        // ⬅ faster
    stagger: 0.08,        // ⬅ faster
    ease: "power3.out",   // ⬅ snappier
  },
  "-=0.2"
);

tl.from(
  ".hero-footer",
  {
    y: 25,                // less distance
    opacity: 0,
    duration: 0.4,        // ⬅ faster
    ease: "power3.out",
  },
  "-=0.2"
);

}

// ======================================
// SIDEBAR GSAP TIMELINE
// ======================================
const sidebarTL = gsap.timeline({ paused: true });

sidebarTL
  .to(dropdownMenu, {
    right: 0,
    duration: 0.35,
    ease: "power2.out",
  })
  .from(
    ".dropdown-menu ul li, .mode-btn",
    {
      x: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.3,
      ease: "power2.out",
    },
    "-=0.1"
  );

// ======================================
// SIDEBAR CONTROLS
// ======================================
function openSidebar() {
  sidebarTL.play();
  toggleIcon(true);
}

function closeSidebar() {
  sidebarTL.reverse();
  toggleIcon(false);
}

// ======================================
// ICON TOGGLE (☰ ↔ ✖)
// ======================================
function toggleIcon(isOpen) {
  if (isOpen) {
    sideBarIcon.classList.remove("fa-bars");
    sideBarIcon.classList.add("fa-xmark");
  } else {
    sideBarIcon.classList.remove("fa-xmark");
    sideBarIcon.classList.add("fa-bars");
  }
}

// ======================================
// EVENT LISTENERS
// ======================================

// Hamburger icon toggle
sideBarIcon.addEventListener("click", () => {
  sidebarTL.reversed() ? openSidebar() : closeSidebar();
});

// Close sidebar when clicking any menu item
dropdownMenu.addEventListener("click", (e) => {
  if (e.target.closest("li") || e.target.closest("a")) {
    closeSidebar();
  }
});

// Close sidebar on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !sidebarTL.reversed()) {
    closeSidebar();
  }
});

// ======================================
// THEME TOGGLE
// ======================================
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("white-theme");
  });
});

// ======================================
// INIT
// ======================================
firstPageAnimation();
