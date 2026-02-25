import { forwardRef } from 'react';
import Slider from 'react-slick';
import Carousel from 'src/components/Carousel';
import { section } from 'src/constants/images/images';
import FadeInSection from 'src/Pages/Home/CarouselHolder/FadeInSections';

const CarouselHolder = forwardRef<Slider>((props, ref) => {
  return (
    <>
      <FadeInSection key={section.id}>
        <div id={section.id}>
          <Carousel images={section.images} ref={ref} />
        </div>
      </FadeInSection>
    </>
  );
});

export default CarouselHolder;
