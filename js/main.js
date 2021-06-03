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

  // плавный скролл якорных ссылок
  $("#navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 200);
    });
    
   // кнопка изюранного
  var bookMark = $(".news-item__bookmark");
  bookMark.on("click", function () {    
    $(this).toggleClass("news-item__bookmark--active");
  });

});
 // многоточие 
document.addEventListener( "DOMContentLoaded", () => {
   const wrappers = document.querySelectorAll(['p', 'span', 'h2']); 
   wrappers.forEach(item => { 
      let options = {
      ellipsis: "\u2026 ",
      truncate: "word",
   };    
    new Dotdotdot( item, options );
    });
});

