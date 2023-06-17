
var swiper = new Swiper(".mySwiperclient", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        991: {
          spaceBetween: 80
        },
        
      }
  });