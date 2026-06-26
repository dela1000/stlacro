import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import EventInfo from 'src/components/EventInfo';
import Newsletter from 'src/components/Newsletter';
import { eventsInfo, jamsInfo, workshopsInfo } from 'src/constants/eventsInfo';
import useSetVisible from 'src/hooks/setVisible';
import CarouselHolder from 'src/Pages/Home/CarouselHolder';

const Home = () => {
  const isVisible = useSetVisible();
  const sliderRef = useRef<Slider>(null);

  const today = new Date();
  const activeWorkshops = workshopsInfo.filter((workshop) => new Date(workshop.endDate) >= today);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        sliderRef.current?.slickPrev();
      } else if (e.key === 'ArrowRight') {
        sliderRef.current?.slickNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`overflow-hidden ${isVisible ? 'opacity-100 ' : 'opacity-0 '} transition-opacity duration-2000 ease-in`}>
      <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12">
        <div className="flex justify-center lg:justify-start text-center">
          <div className="font-serif text-5xl">STL ACRO</div>
        </div>
      </div>
      <CarouselHolder ref={sliderRef} />
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start px-6 lg:px-24 pb-12 pt-12 lg:pb-12">
        <div className="px-4">
          <div className="flex justify-center lg:justify-start text-center">
            <div className="font-serif text-4xl">Classes</div>
          </div>
          {eventsInfo.map((event, index) => (
            <EventInfo key={index} event={event} />
          ))}
        </div>
        {activeWorkshops.length > 0 && (
          <div className="px-4">
            <div className="flex justify-center lg:justify-start text-center">
              <div className="font-serif text-4xl">Workshops</div>
            </div>
            {activeWorkshops.map((workshop, index) => (
              <EventInfo key={index} event={workshop} />
            ))}
          </div>
        )}
        <div className="px-4">
          <div className="flex justify-center lg:justify-start text-center">
            <div className="font-serif text-4xl">Jams</div>
          </div>
          {jamsInfo.map((event, index) => (
            <EventInfo key={index} event={event} />
          ))}
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
