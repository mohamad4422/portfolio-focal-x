// Remove all classes related to swiper JS Library


const swiperSliders = document.querySelectorAll(".swiper-slide");
const swp = document.querySelector(".mySwiper");
const swiperWrapper = document.querySelector(".swiper-wrapper");
// console.log(swiper, swiperWrapper);
window.addEventListener("resize", () => {
  if (window.innerWidth <= 430) {
    swp.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSliders.forEach((slider) => slider.classList.remove("swiper-slide"));
  } else {
    swp.classList.add("swiper");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperSliders.forEach((slider) => slider.classList.add("swiper-slide"));

  }
});