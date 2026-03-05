import ResourceSection from 'src/components/ResourceSection/ResourceSection';
import { beginnerVideosData, websitesData, youtubeChannelsData } from 'src/constants/resourcesData';

const Resources = () => {
  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">RESOURCES</div>

      <div className="mt-8 flex flex-col gap-4 max-w-3xl mx-auto">
        {[websitesData, youtubeChannelsData, beginnerVideosData].map((data, index) => (
          <ResourceSection key={index} data={data} isEven={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
