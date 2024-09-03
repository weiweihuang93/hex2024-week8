import './assets/scss/all.scss';

console.log("Hello world!");

const BannerSwiper = new Swiper(".BannerSwiper", {
    initialSlide: 1,
    loop: true, // 啟用回到起點模式
    loopAdditionalSlides: 1,
    
    slidesPerView: 1,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next-n",
        prevEl: ".swiper-button-prev-n",
      },
  });

// const CourseSwiper = new Swiper(".CourseSwiper", {
//     loop: true,
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 24,
//         grid: {
//           fill: 'column',
//           rows: 1,
//         },
//       },
//       992: {
//         slidesPerView: 2,
//         spaceBetween: 24,
//         grid: {
//           fill: 'column',
//           rows: 2,
//         },
//       },
//     }
// });

const TopsalesSwiper = new Swiper(".TopsalesSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true, // 啟用回到起點模式
    
    breakpoints: {
        // 当窗口宽度 >= 320px 时
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
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
  initialSlide: 1,
  spaceBetween: 24,
  loop: true, // 啟用回到起點模式

  breakpoints: {
    // 当窗口宽度 >= 320px 时
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