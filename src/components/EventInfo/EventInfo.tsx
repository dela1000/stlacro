import Button from 'src/components/Button';
import type { Event } from 'src/constants/eventsInfo';

type Props = {
  event: Event;
};

const EventInfo = ({ event }: Props) => {
  const { location, days, address, lead, buttonText, buttonUrl } = event;

  const openLink = () => {
    if (!buttonUrl) return;
    try {
      // Use a programmatic anchor click — this preserves full URL fragments (including text fragments)
      const a = document.createElement('a');
      a.href = buttonUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // Fallback to window.open
      window.open(buttonUrl, '_blank', 'noopener,noreferrer');
    }
  };
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
          <Button text={buttonText} hoverAnimation={true} onClick={openLink} />
        </div>
      )}
    </div>
  );
};

export default EventInfo;
