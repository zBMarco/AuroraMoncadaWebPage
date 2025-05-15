

// Swiper Carrousel Main
AOS.init({
    duration: 1500,
    once: false
  })

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
