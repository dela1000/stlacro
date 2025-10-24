import Carousel from 'src/components/Carousel';
import { section } from 'src/constants/images/images';
import FadeInSection from 'src/Pages/Home/CarouselHolder/FadeInSections';

const CarouselHolder = () => {
  return (
    <>
      <FadeInSection key={section.id}>
        <div id={section.id}>
          <Carousel images={section.images} />
        </div>
      </FadeInSection>
    </>
  );
};

export default CarouselHolder;
