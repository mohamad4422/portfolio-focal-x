// // import "@fontsource/inter/300.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/700.css";

// swiper import
// import Swiper from "swiper";
// import "swiper/css";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    640: {
    slidesPerView: 2,
    spaceBetween: 20,
    },
    768: {
    slidesPerView: 3,
    spaceBetween: 30,
    },
    1024: {
    slidesPerView: 4,
    spaceBetween: 30,
    },
  }
  });
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');
  var button4 = document.getElementById('button4');
  var button5 = document.getElementById('button5');

  button1.addEventListener('click', function() {
  swiper.slideTo(0);
  });

  button2.addEventListener('click', function() {
  swiper.slideTo(3);
  });

  button3.addEventListener('click', function() {
  swiper.slideTo(6);
  });

  button4.addEventListener('click', function() {
  swiper.slideTo(9);
  });

  button5.addEventListener('click', function() {
  swiper.slideTo(12);
  });
  function toggleClass(button) {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] !== button) {
        buttons[i].classList.remove('.active');
      }
    }
    button.classList.add('.active');
  }