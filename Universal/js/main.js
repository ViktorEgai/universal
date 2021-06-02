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
});