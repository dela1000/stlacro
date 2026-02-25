import Button from 'src/components/Button';
import type { Event } from 'src/constants/eventsInfo';

type Props = {
  event: Event;
};

const EventInfo = ({ event }: Props) => {
  const { location, locationUrl, days, address, lead, buttonText, buttonUrl, info } = event;

  const openLink = () => {
    if (!buttonUrl) return;
    try {
      const a = document.createElement('a');
      a.href = buttonUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.open(buttonUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="lg:pb-10 pb-12 px-2 max-w-96">
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Days:</div>
      </div>
      <div className="flex justify-center lg:justify-start">{days}</div>
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Location:</div>
      </div>
      {locationUrl ? (
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center lg:justify-start text-blue-600 underline hover:text-blue-800"
        >
          {location}
        </a>
      ) : (
        <div className="flex justify-center lg:justify-start">{location}</div>
      )}
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Address:</div>
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center lg:justify-start text-black underline hover:text-gray-500"
      >
        {address}
      </a>
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">With:</div>
      </div>
      <div className="flex justify-center lg:justify-start">{lead}</div>
      <div className="lg:flex  gap-1">
        <div className="flex justify-center lg:justify-start font-bold">Info:</div>
      </div>
      {info && <div className="pt-2 flex justify-center lg:justify-start">{info}</div>}
      {buttonText && (
        <div className="pt-6 flex justify-center lg:justify-start">
          <Button text={buttonText} hoverAnimation={true} onClick={openLink} />
        </div>
      )}
    </div>
  );
};

export default EventInfo;
