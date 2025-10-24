import Slider from 'react-slick';

import { createSettings } from 'src/components/Carousel/settings';
import { type CarouselProps } from 'src/components/Carousel/types';

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="w-screen overflow-hidden">
      <Slider {...createSettings(images.length)}>
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative w-full max-w-3xl lg:max-w-none">
              <img src={src} alt={`Slide ${index}`} className="w-full lg:w-auto h-[500px] object-cover lg:object-contain object-center" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
