$(document).ready(function () {
  $(".youtube-slider").slick({
    arrows: false,
    // appendArrows: $(".arrows-feedback-slider"),
    infinite: true,
    speed: 500,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".describe-slider",

    // variableWidth: true,
    // adaptiveHeight: true,
    // centerMode: true,
    // rows: 1,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".describe-slider").slick({
    arrows: false,
    // appendArrows: $(".arrows-feedback-slider"),
    infinite: true,
    speed: 500,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".youtube-slider",

    // variableWidth: true,
    // adaptiveHeight: true,
    // centerMode: true,
    // rows: 1,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".qualification-slider").slick({
    arrows: false,
    // appendArrows: $(".arrows-feedback-slider"),
    infinite: true,
    speed: 500,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".qualification-slider-description",

    // variableWidth: true,
    // adaptiveHeight: true,
    // centerMode: true,
    // rows: 1,
    // responsive: [
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,

    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 400,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   },
    // },
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
  $(".feedback-slider").slick({
    arrows: false,
    // appendArrows: $(".arrows-feedback-slider"),
    infinite: true,
    speed: 500,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    //   // asNavFor: ".qualification-slider-description",

    //   // variableHeight: true,
    //   // adaptiveHeight: true,
    //   // centerMode: true,
    //   // rows: 1,
    //   // responsive: [
    //   // {
    //   //   breakpoint: 600,
    //   //   settings: {
    //   //     slidesToShow: 2,

    //   //     slidesToScroll: 1,
    //   //   },
    //   // },
    //   // {
    //   //   breakpoint: 400,
    //   //   settings: {
    //   //     slidesToShow: 1,
    //   //     slidesToScroll: 1,
    //   //   },
    //   // },
    //   //   {
    //   //     breakpoint: 320,
    //   //     settings: {
    //   //       slidesToShow: 1,
    //   //       slidesToScroll: 1,
    //   //     },
    //   //   },
    //   // ],
  });

  $(".articles-slider").slick({
    arrows: false,
    // appendArrows: $(".arrows-feedback-slider"),
    infinite: true,
    speed: 500,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    //   // asNavFor: ".qualification-slider-description",

    //   // variableHeight: true,
    //   // adaptiveHeight: true,
    //   // centerMode: true,
    //   // rows: 1,
    //   // responsive: [
    //   // {
    //   //   breakpoint: 600,
    //   //   settings: {
    //   //     slidesToShow: 2,

    //   //     slidesToScroll: 1,
    //   //   },
    //   // },
    //   // {
    //   //   breakpoint: 400,
    //   //   settings: {
    //   //     slidesToShow: 1,
    //   //     slidesToScroll: 1,
    //   //   },
    //   // },
    //   //   {
    //   //     breakpoint: 320,
    //   //     settings: {
    //   //       slidesToShow: 1,
    //   //       slidesToScroll: 1,
    //   //     },
    //   //   },
    //   // ],
  });
});

$(".qualification-slider-description").slick({
  arrows: false,
  appendArrows: $(".arrows-feedback-slider"),
  infinite: true,
  speed: 500,
  easing: "ease",
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".qualification-slider",

  // variableWidth: true,
  // adaptiveHeight: true,
  // centerMode: true,
  // rows: 1,
  // responsive: [
  // {
  //   breakpoint: 600,
  //   settings: {
  //     slidesToShow: 2,

  //     slidesToScroll: 1,
  //   },
  // },
  // {
  //   breakpoint: 400,
  //   settings: {
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   },
  // },
  //   {
  //     breakpoint: 320,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
});

$(".video-controls-arrow-left").click(function (event) {
  $(".youtube-slider").slick("slickPrev");
});
$(".video-controls-arrow-right").click(function (event) {
  $(".youtube-slider").slick("slickNext");
});

$(".qualification-slider-controls-arrow-left").click(function (event) {
  $(".qualification-slider").slick("slickPrev");
});
$(".qualification-slider-controls-arrow-right").click(function (event) {
  $(".qualification-slider").slick("slickNext");
});

$(".feedback-slider-controls-arrow-left").click(function (event) {
  $(".feedback-slider").slick("slickPrev");
});
$(".feedback-slider-controls-arrow-right").click(function (event) {
  $(".feedback-slider").slick("slickNext");
});

$(".articles-slider-controls-arrow-left").click(function (event) {
  $(".articles-slider").slick("slickPrev");
});
$(".articles-slider-controls-arrow-right").click(function (event) {
  $(".articles-slider").slick("slickNext");
});
