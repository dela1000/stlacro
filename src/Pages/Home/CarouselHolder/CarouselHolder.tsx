import Carousel from 'src/components/Carousel';
import { section } from 'src/constants/images/images';
import FadeInSection from 'src/Pages/Home/CarouselHolder/FadeInSections';

const CarouselHolder = () => {
  return (
    <>
      <FadeInSection key={section.id}>
        <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12">
          <div className="flex justify-center lg:justify-start text-center">
            <div className="font-serif text-3xl lg:text-5xl">{section.title}</div>
          </div>
        </div>
        <div id={section.id}>
          <Carousel images={section.images} />
        </div>
      </FadeInSection>
    </>
  );
};

export default CarouselHolder;
