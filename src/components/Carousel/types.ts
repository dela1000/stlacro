import { type PhotoImage } from 'src/constants/images/types';
import Slider from 'react-slick';

export type CarouselProps = {
  images: PhotoImage[];
  ref?: React.Ref<Slider>;
};
