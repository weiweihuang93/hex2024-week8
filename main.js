import './assets/scss/all.scss';

console.log("Hello world!");

const BannerSwiper = new Swiper(".BannerSwiper", {
    initialSlide: 1, // 起始值
    loop: true, // 啟用回到起點模式
    loopAdditionalSlides: 1,
    
    slidesPerView: 1,

    breakpoints: {
      1200: {
      slidesPerView: 1,
      spaceBetween: 24,
      },
},

    navigation: {
        nextEl: ".swiper-button-next-n",
        prevEl: ".swiper-button-prev-n",
      },
  });

const CourseSwiper = new Swiper(".CourseSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 24,
  loop: true,
  grid: {
    rows: 1,
    fill: 'row',
  },
  
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const TopsalesSwiper = new Swiper(".TopsalesSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 24,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next-n",
    prevEl: ".swiper-button-prev-n",
  },
});

const TeacherSwiper = new Swiper(".TeacherSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true, // 啟用回到起點模式

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

const HotThemeSwiper = new Swiper(".HotThemeSwiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true, // 啟用回到起點模式

  breakpoints: {
    430: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next-icon",
    prevEl: ".swiper-button-prev-icon",
  },
});