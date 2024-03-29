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
 
 
  $(".comments__add").on("click", function (event) {
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

  // модальное окно
  var modalButton = $('[data-toggle=modal]');
  modalButton.on("click", openModal);
  function openModal() {
    var modal = $(".modal");
    modal.addClass("modal--visible");  
    $('body').addClass("overflow");
    };

  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);
  function closeModal(event) {
    event.preventDefault();
    var modal = $(".modal");
    modal.removeClass("modal--visible"); 
    $('body').removeClass("overflow"); 
    };

  $(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      e.preventDefault();
    var modal = $(".modal");
    modal.removeClass("modal--visible");
    $('body').removeClass("overflow"); 
    }    
  });
  
	$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal__dialog,.header__button").length) {
    $("body").find(".modal").removeClass("modal--visible");
    $('body').removeClass("overflow"); 
  }
});
// подключению кнопки показать еще
$(function () {
    $(".comments__item").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".comments__item:hidden").slice(0, 4).slideDown();
        if ($(".comments__item:hidden").length == 0) {
            $("#loadMore").attr('disabled', true);
        };        
    });
});

  
// валидация

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          minlength: "Имя должно состоять минимум из 2 букв",
          required: "Введите свое имя пожалуйста",                   
        },
        email: {
          required: "Введите свою электронную почту",
          email: "Электронная почта формата имя@домен.com",
        },
        phone: {
          minlength: "Введите свой номер целиком",
          required: "Введите свой номер телефона пожалуйста",
          
        },
        comment: {
          minlength: "Требуется ввести минимум 100 символов",
          required: "Введите свой комментарий",                   
        },
      },
    });
  });

  // маска для номера телефона
 
   var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '+7 (000) 000-0000' : '+7 (000) 000-0009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('.phone').mask(SPMaskBehavior, spOptions);
