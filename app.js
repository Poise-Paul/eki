const bars = document.querySelector("#bars");
const mobile = document.querySelector("#mobileNav");
const closeIcon = document.querySelector("#closeIcon");
const filterOpen = document.querySelector("#filterIcon");
const filter = document.querySelector("#filteredOptions");

// Menu Toggler
bars.addEventListener("click", () => mobile.classList.remove("hidden"));
closeIcon.addEventListener("click", () => mobile.classList.add("hidden"));
// End Menu Toggler

// Filter Toggler
filterOpen.addEventListener("click", () => filter.classList.toggle("hidden"));

var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
