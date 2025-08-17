(function ($) {
  "use strict";

  //offcanvas

  $(".tp-header-toogle").on("click", function () {
    $(".tp-offcanvas").addClass("tp-offcanvas-open");
  });
  $(".tp-offcanvas-close").on("click", function () {
    $(".tp-offcanvas").removeClass("tp-offcanvas-open");
  });

  // lang menu
  $(".tp-lang-toggle").on("click", function () {
    $(".tp-lang-submenu").slideToggle();
  });

  // data bg img
  $("[data-bg-img]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")");
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
// data circel bar
    $("[data-circle-bar]").each(function () {
    $(this).css("background", $(this).attr("data-circle-bar"));
  });

  $("[data-border-color]").each(function () {
    $(this).css("border-color", $(this).attr("data-border-color"));
  });

  // data color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  $(".popup-image").magnificPopup({
    type: "image",
    // other options
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
    // other options
  });

  //Testimonials slider

  var swiper = new Swiper(".tptestimonial-slider-active", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: ".tp-testimonial-next-arrow",
      prevEl: ".tp-testimonial-pre-arrow",
    },
  });


  //Gallery slider

    var swiper = new Swiper(".tp-gallery-slider-active", {
      slidesPerView: "auto",
      spaceBetween: 10,
      freeMode: true,
      centeredSlides: true,
      loop: true,
      speed: 9000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });



  //date 
    $(function() {
      $(".datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: 0 
      });
    });
})(jQuery);
