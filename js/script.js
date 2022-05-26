// Fixed Navbar

$(function () {
  let nav = $("#navbar");
  let navTop = nav.offset().top;

  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();
    if (navTop < scrTop) {
      nav.addClass("fixed-menu");
    } else {
      nav.removeClass("fixed-menu");
    }

    // Back To Top Button

    if (scrTop > 200) {
      $(".back-top").fadeIn(500);
    } else {
      $(".back-top").fadeOut(500);
    }
  });

  $(".back-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // Menu Toggler

  $(".navToggler").click(function () {
    $(".menu").slideToggle();
    $(this).toggleClass("navToggler-active");
  });
  // Banner Slider

  $(".banner").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: ".banner-prev-arrow",
    nextArrow: ".banner-next-arrow",
  });

  // Blog Slider
  $('.blog-area').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: ".blog-prev-arrow",
    nextArrow: ".blog-next-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Testimonial Slider

  $(".t-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".t-p-slider",
  });
  $(".t-p-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".t-slider",
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    prevArrow: ".testimonial-prev-arrow",
    nextArrow: ".testimonial-next-arrow",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   Brand Slider

  $(".brand-slide").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    prevArrow: ".brand-prev-arrow",
    nextArrow: ".brand-next-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // PreLoader

  $(window).load(function () {
    $(".pre-load").delay(100).fadeOut();
  });

  // Whats app 

  $("#myButton").venomButton({
    phone: "01876637965",
    chatMessage: "Hello!",
    message: "Hi!",
    showPopup: true,
    position: "right",
    autoOpenTimeout: 2000,
    linkButton: true,
    size: "42px",
    backgroundColor: "#25D366",
    headerColor: "#128C7E",
    headerTitle: "WhatsApp Chat",
    zIndex: 999999,
    nameClient: "jQuery Script",
  });

  // Home Page End

  // About Us Page Start

  // Team SLider

  $('.team').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: ".team-prev-arrow",
    nextArrow: ".team-next-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  AOS.init();
});
