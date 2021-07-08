var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
  offset: 100,
  method: "offset",
});

var dataSpyList = [].slice.call(
  document.querySelectorAll('[data-bs-spy="scroll"]')
);
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
});

(function () {
  const scrollto = (el) => {
    let header = select("#navbar");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };
});

// $(".home-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: 0,
//     },
//     1000
//   );
// });

// $(".about-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#about").offset().top - 100,
//     },
//     1000
//   );
// });

// $(".portfolio-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#portfolio").offset().top - 60,
//     },
//     1000
//   );
// });

// $(".services-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#services").offset().top - 100,
//     },
//     1000
//   );
// });

// $(".testimonial-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#testimonial").offset().top - 70,
//     },
//     1000
//   );
// });

// $(".pricing-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#pricing").offset().top - 100,
//     },
//     1000
//   );
// });

// $(".team-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#team").offset().top - 80,
//     },
//     1000
//   );
// });

// $(".contact-btn").click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $("#footer").offset().top - 100,
//     },
//     1000
//   );
// });

$(document).ready(function () {
  var $obj = lc_lightbox(".portfolio-slider a", {
    slideshow_time: 4000,
    skin: "minimal",
    fullscreen: true,
  });

  var $obj2 = lc_lightbox("#about .middle a", {
    skin: "minimal",
    fullscreen: true,
  });

  var $obj = lc_lightbox(".team-slider .overlay a", {
    slideshow_time: 4000,
    skin: "minimal",
    fullscreen: true,
  });
});

$(".jarallax").jarallax({
  speed: 0.25,
});

$(".portfolio-slider").slick({
  infinite: true,
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$(".service-slider").slick({
  infinite: true,
  slidesToShow: 3,
  vertical: true,
  prevArrow: '<i class="far fa-chevron-up arrow-btn"></i>',
  nextArrow: '<i class="far fa-chevron-down arrow-btn"></i>',
  centerMode: true,
  centerPadding: "0",
  focusOnSelect: true,
  speed: 1000,
  verticalSwiping: true,
  autoplay: true,
  swipeToSlide: true,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        verticalSwiping: false,
        focusOnSelect: false,
        vertical: false,
        prevArrow: '<i class="far fa-chevron-left arrow-btn prev"></i>',
        nextArrow: '<i class="far fa-chevron-right arrow-btn next"></i>',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        verticalSwiping: false,
        focusOnSelect: false,
        vertical: false,
        prevArrow: '<i class="far fa-chevron-left arrow-btn prev"></i>',
        nextArrow: '<i class="far fa-chevron-right arrow-btn next"></i>',
      },
    },
  ],
});

$(".user-slider").slick({
  infinite: true,
  slidesToShow: 3,
  vertical: true,
  prevArrow: '<i class="far fa-chevron-up arrow-btn"></i>',
  nextArrow: '<i class="far fa-chevron-down arrow-btn"></i>',
  centerMode: true,
  centerPadding: "0",
  focusOnSelect: true,
  speed: 600,
  verticalSwiping: true,
  asNavFor: ".review-slider",
  autoplay: true,
  swipeToSlide: true,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        verticalSwiping: false,
        vertical: false,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        verticalSwiping: false,
        vertical: false,
        arrows: false,
      },
    },
  ],
});

$(".review-slider").slick({
  infinite: true,
  slidesToShow: 1,
  vertical: false,
  arrows: false,
  fade: true,
  focusOnSelect: true,
  verticalSwiping: true,
  swipeToSlide: true,
  touchThreshold: 100,
  asNavFor: ".user-slider",
  autoplay: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        verticalSwiping: false,
      },
    },
  ],
});

$(".team-slider").slick({
  infinite: true,
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
  ],
});

$(".client-slider").slick({
  infinite: true,
  slidesToShow: 5,
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        dots: true,
      },
    },
  ],
});

$(".cnt-up").counterUp({
  delay: 1,
  time: 400,
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 600) {
    $(".gototop").fadeIn();
  } else {
    $(".gototop").fadeOut();
  }
});

$(".gototop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$(".navbar-toggler").click(function () {
  $(".bar").toggle();
  $(".close").toggle();
  var $nav = $("#navbar");
  $nav.addClass(
    "scrolled",
    $(".close").is(":visible") || $("html, body").scrollTop() > $nav.height()
  );
  if (
    $(".bar").is(":visible") &&
    $("html, body").scrollTop() == $nav.height()
  ) {
    $nav.removeClass("scrolled");
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass("scrolled", $("html, body").scrollTop() > $nav.height());
  });
});
