$(Document).ready(function () {
  $('.featured').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      }
    },
  {
      breakpoint: 699,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 497,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
    infinite: false,
    swipe: true,
  });
});
