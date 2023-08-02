$(function () {
  $(document).ready(function () {
    $("#banner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      dots: true,
      speed: 2000,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
  // banner part start

  // banner part end

  // Extra button part start

  $(".extra-btn").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  // Extra button part end

  // scroll part start

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 20) {
      $(".main-nav").addClass("nav-bg");
    } else {
      $(".main-nav").removeClass("nav-bg");
    }

    if (scrolling > 20) {
      $(".extra-btn").fadeIn(200);
    } else {
      $(".extra-btn").fadeOut(200);
    }
  });

  // scroll part end

  // video part start

  new VenoBox({
    selector: ".about-video",
  });

  // video part end

  // image part start

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  // image part end

  $(document).ready(function () {
    $(".company").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<i class="fa-solid fa-angle-left left-arrow">',
      nextArrow: '<i class="fa-solid fa-angle-right right-arrow">',
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "60px",
    });
  });
  $(document).ready(function () {
    $(".test-body").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      autoplaySpeed: 3500,
      dots: true,
      speed: 2000,
    });
  });
  // $(document).ready(function () {

  // });

  $(".counter").counterUp({
    delay: 100,
    time: 8000,
  });

  // $('.js-preloader').preloadinator({
  //   animation: 'fadeOut',
  //   animationDuration: 1000
  // });

  $(document).ready(function () {
    $("#colorful").colorfulTab();
  });
});
