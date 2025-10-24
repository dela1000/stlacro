import Button from 'src/components/Button';
import type { Event } from 'src/constants/eventsInfo';

type Props = {
  event: Event;
};

const EventInfo = ({ event }: Props) => {
  const { location, days, address, lead, buttonText, buttonUrl } = event;
  return (
    <div>
      <div className="pt-10">
        <div className="flex gap-1">
          <div className="font-bold">Location:</div> {location}
        </div>
        <div className="flex gap-1">
          <div className="font-bold">Days:</div> {days}
        </div>
        <div className="flex gap-1">
          <div className="font-bold">Address:</div> {address}
        </div>
        <div className="flex gap-1">
          <div className="font-bold">With:</div> {lead}
        </div>
        {buttonText && (
          <div className="pt-6">
            <Button text={buttonText} hoverAnimation={true} onClick={() => window.open(buttonUrl, '_blank')} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
