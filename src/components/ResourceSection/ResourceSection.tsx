import type { ResourceSectionData } from 'src/constants/resourcesData';

interface ResourceSectionProps {
  data: ResourceSectionData;
  isEven: boolean;
}

const ResourceSection = ({ data, isEven }: ResourceSectionProps) => {
  return (
    <div className={`border border-gray-200 rounded-lg p-6 ${isEven ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="text-2xl font-bold pb-2">{data.title}</div>
      <div className="text-gray-700 leading-relaxed flex flex-col gap-4">
        <p className="text-gray-600 mb-2 mx-1">{data.description}</p>
        {data.items.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-3 rounded-lg border border-gray-200 hover:border-blue-900 hover:shadow-md transition-all
              ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="font-bold text-blue-900">{item.name}</div>
            <div className="text-sm text-gray-600">{item.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;
