$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".search-bar").css("border-width", "1.5");
    $(".search-input").css("visibility", "visible").focus();
    $(".search-icon").removeClass("search-icon-right");
    $(".search-icon").addClass("search-icon-left");
  });

  $(".search-input").focusout(function () {
    $(".search-bar").css("border-width", "0");
    $(".search-input").css("visibility", "hidden");
    $(".search-icon").removeClass("search-icon-left");
    $(".search-icon").addClass("search-icon-right");
  });

  if ($(window).width() <= 1000) {
    $(".search-icon").removeClass("search-icon-right");
    $(".search-icon").addClass("search-icon-left");

    $(".search-input").focusout(function () {
      $(".search-icon").removeClass("search-icon-right");
      $(".search-icon").addClass("search-icon-left");
      $(".search-bar").css("border-width", "0");
      $(".search-input").css("visibility", "hidden");
    });
  }

  if ($(window).width() <= 767) {
    $(".search-icon").removeClass("search-icon-right");
    $(".search-icon").addClass("search-icon-left");

    $(".search-input").focusout(function () {
      $(".search-icon").removeClass("search-icon-right");
      $(".search-icon").addClass("search-icon-left");
      $(".search-bar").css("border-width", "1.5");
      $(".search-input").css("visibility", "visible");
    });
  }

  $(".menu").click(function () {
    $(".nav-links").toggleClass("show-nav-links");
  });
});
