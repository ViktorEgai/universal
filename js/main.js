$(document).ready(function () {
  // табы 
  var tabsItem = $(".main-tabs__item");
  var contentItem = $(".content__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("main-tabs__item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("main-tabs__item--active");
  });
  
  // кнопка меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".header-navbar")
    .toggleClass("header-navbar--visible");
  });
  $(document).scroll(function() {
    $(".header-navbar").removeClass("header-navbar--visible");
    
  });
//  кнопка наверх
  var toTop = $(".to-top");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200){
     toTop.addClass("to-top--visible");
    }else{
   toTop.removeClass("to-top--visible");
  };
  });
  
  $(".to-top").click(function () {                
        $('body,html').animate({scrollTop: 0}, 400);
  });


  // плавный скролл якорных ссылок
  $("#navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
  
   // кнопка избранного
  var bookMark = $(".news-item__bookmark");
  bookMark.on("click", function () {    
    $(this).toggleClass("news-item__bookmark--active");
  });
  var bigMark = $(".main-news__bookmark");
  bigMark.on("click", function () {    
    $(this).toggleClass("main-news__bookmark--active");
  });

});

 // многоточие 
document.addEventListener( "DOMContentLoaded", () => {
   const wrappers = document.querySelectorAll('p'); 
   wrappers.forEach(item => { 
      let options = {
      ellipsis: "\u2026 ",
      truncate: "word",
   };    
    new Dotdotdot( item, options );
    });
});

// автослайдер для секции со статьей
const swiper = new Swiper('.career-swiper', {
  // Optional parameters 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.choice__pagination',
    clickable: true,
  },
  autoplay: {
   delay: 3000,
 },

});

// слайдер для на второй странице 
const swiperArticle = new Swiper('.hero-article__swiper', {
  loop: true,
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.hero-article__slide-button--next',
    prevEl: '.hero-article__slide-button--prev',
  }, 
});