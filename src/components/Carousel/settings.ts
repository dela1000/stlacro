export const createSettings = (imagesLength: number) => ({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1500,
  cssEase: 'ease-in-out',
  slidesToScroll: 1,
  centerPadding: '10px',
  slidesToShow: Math.min(imagesLength, 2),
  arrows: true,
  variableWidth: true,
  centerMode: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: false,
        centerMode: false,
      },
    },
  ],
});
