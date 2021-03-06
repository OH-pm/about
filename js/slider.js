new Swiper('.gallery-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
 },
 //точечки
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
 },
 //прокрyтка клавишами
 keyboard: {
  enabled: true,
  pageUpDown: true,
 },
 autoHeight: true,
 slidesPerView: 4,//кол-во сладов на страничке
 spaceBetween: 10, //пробел междy картинками
 preloadImages: false,
 lazy: {
  loadOnTransitionStart: false,
  loadPrevNext: false,
 },
 breakpoints: {
  320: {
  slidesPerView:1,
  },
  480: {
   slidesPerView:1,
  },
  992: {
   slidesPerView:3,
  },
 },
 watchSlidesProgress: true,
 watchSlidesVisibility:true,
 
});
// сладедр дипломов
new Swiper('.diplomas-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
 },
 //точечки
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
 },
 //прокрyтка клавишами
 keyboard: {
  enabled: true,
  pageUpDown: true,
 },
 autoHeight: true,
 slidesPerView: 4,//кол-во сладов на страничке
 spaceBetween: 10, //пробел междy картинками
 preloadImages: false,
 lazy: {
  loadOnTransitionStart: false,
  loadPrevNext: false,
 },
 breakpoints: {
  320: {
  slidesPerView:1,
  },
  480: {
   slidesPerView:2,
  },
  992: {
   slidesPerView:3,
  },
 },
 watchSlidesProgress: true,
 watchSlidesVisibility:true,
 
});