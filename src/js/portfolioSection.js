var swiper = new Swiper(".mySwiper", {
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centerInsufficientSlides: true,
      breakpoints: {
        400: {
          slidesPerView: 3,
          spaceBetween: 60,
          slideNextClass :"swiper-slide-next",
          slidesOffsetBefore: 50 ,
          centeredSlides: false ,
        },
        767: {
          slidesPerView: 2.5,
          spaceBetween: 60,
          slideNextClass :"swiper-slide-next",
          slidesOffsetBefore: 250 ,
          centeredSlides: false ,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide : 3,
          grabCursor: true,
          centeredSlides : true,
          setWrapperSize: false,
          speed : 500,
          slideNextClass: "swiper-slide-active",
          slidesOffsetBefore: -300 , 
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        }
      },
  });

  const left = document.querySelector("")