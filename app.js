const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");

bars.addEventListener("click", () => {
  if (menu.classList.contains("hidden") && window.innerWidth < 780) {
    menu.classList.remove("hidden");
    menu.classList.add(
      "flex",
      "flex-col",
      "text-right",
      "bg-gradient-to-r",
      "w-full",
      "absolute",
      "top-16"
    );
  } else {
    menu.classList.add("hidden");
  }
});

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    menu.classList.add("hidden");
    menu.classList.remove(
      "flex",
      "flex-col",
      "text-right",
      "bg-gradient-to-r",
      "w-full",
      "absolute",
      "top-16"
    );
  }
});


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
