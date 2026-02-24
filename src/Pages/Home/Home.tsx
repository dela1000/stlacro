import EventInfo from 'src/components/EventInfo';
import { eventsInfo, jamsInfo, workshopsInfo } from 'src/constants/eventsInfo';
import useSetVisible from 'src/hooks/setVisible';
import CarouselHolder from 'src/Pages/Home/CarouselHolder';

const Home = () => {
  const isVisible = useSetVisible();

  const today = new Date();
  const activeWorkshops = workshopsInfo.filter((workshop) => new Date(workshop.endDate) >= today);

  return (
    <div className={`overflow-hidden ${isVisible ? 'opacity-100 ' : 'opacity-0 '} transition-opacity duration-2000 ease-in`}>
      <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12">
        <div className="flex justify-center lg:justify-start text-center">
          <div className="font-serif text-5xl">STL ACRO</div>
        </div>
      </div>
      <CarouselHolder />
      <div className="lg:flex justify-around px-6 lg:px-24 pb-12 pt-12 lg:pb-12">
        <div>
          <div className="flex justify-center lg:justify-start text-center">
            <div className="font-serif text-4xl">Classes</div>
          </div>
          {eventsInfo.map((event, index) => (
            <EventInfo key={index} event={event} />
          ))}
        </div>
        {activeWorkshops.length > 0 && (
          <div>
            <div className="flex justify-center lg:justify-start text-center">
              <div className="font-serif text-4xl">Workshops</div>
            </div>
            {activeWorkshops.map((workshop, index) => (
              <EventInfo key={index} event={workshop} />
            ))}
          </div>
        )}
        <div>
          <div className="flex justify-center lg:justify-start text-center">
            <div className="font-serif text-4xl">Jams</div>
          </div>
          {jamsInfo.map((event, index) => (
            <EventInfo key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
