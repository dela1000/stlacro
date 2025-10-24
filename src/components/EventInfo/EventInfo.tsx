import Button from 'src/components/Button';
import type { Event } from 'src/constants/eventsInfo';

type Props = {
  event: Event;
};

const EventInfo = ({ event }: Props) => {
  const { location, days, address, lead, buttonText, buttonUrl } = event;
  return (
    <div className="lg:pb-10 pb-12">
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Days:</div>
      </div>
      <div className="flex justify-center lg:justify-start">{days}</div>
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Location:</div>
      </div>
      <div className="flex justify-center lg:justify-start">{location}</div>
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Address:</div>
      </div>
      <div className="flex justify-center lg:justify-start">{address}</div>
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">With:</div>
      </div>
      <div className="flex justify-center lg:justify-start">{lead}</div>
      {buttonText && (
        <div className="pt-6 flex justify-center lg:justify-start">
          <Button text={buttonText} hoverAnimation={true} onClick={() => window.open(buttonUrl, '_blank')} />
        </div>
      )}
    </div>
  );
};

export default EventInfo;
