import { websitesData, youtubeChannelsData, beginnerVideosData } from 'src/constants/resourcesData';

const Resources = () => {
  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">RESOURCES</div>

      <div className="mt-8 flex flex-col gap-4 max-w-3xl mx-auto">
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="text-2xl font-bold pb-2">Websites & Guides</div>
          <div className="text-gray-700 leading-relaxed flex flex-col gap-4">
            {websitesData.map((site, idx) => (
              <a
                key={idx}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-900 hover:shadow-md transition-all"
              >
                <div className="font-bold text-blue-900">{site.name}</div>
                <div className="text-sm text-gray-600">{site.description}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-2xl font-bold pb-2">YouTube Channels</div>
          <div className="text-gray-700 leading-relaxed flex flex-col gap-4">
            {youtubeChannelsData.map((channel, idx) => (
              <a
                key={idx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-900 hover:shadow-md transition-all"
              >
                <div className="font-bold text-blue-900">{channel.name}</div>
                <div className="text-sm text-gray-600">{channel.description}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="text-2xl font-bold pb-2">Beginner Video Recommendations</div>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              New to AcroYoga? Start with these popular beginner videos on YouTube to learn the fundamentals before attending a class or community
              jam.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {beginnerVideosData.map((video, idx) => (
                <li key={idx}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-blue-700">
                    {video.name}
                  </a>
                  <span className="text-gray-600"> - {video.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
