import { leadershipData } from 'src/constants/leadershipData';

const Leadership = () => {
  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">LEADERSHIP</div>

      <div className="mt-8 flex flex-col gap-12 max-w-4xl mx-auto">
        {leadershipData.map((leader, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx}>
              {/* Mobile layout: name, image, role, bio */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="text-2xl font-bold text-blue-900">{leader.name}</div>
                <img src={leader.image} alt={leader.name} className="w-full aspect-square object-cover rounded-lg shadow-md" />
                <div className="text-lg font-medium text-gray-700">{leader.role}</div>
                <div className="text-gray-600 leading-relaxed">{leader.bio}</div>
                <div className="border-t border-gray-300 pt-4" />
              </div>

              {/* Desktop layout: alternating */}
              <div className={`hidden lg:flex flex-row gap-6 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className="w-full lg:w-1/2">
                  <img src={leader.image} alt={leader.name} className="w-full aspect-square object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                  <div className="text-2xl font-bold text-blue-900">{leader.name}</div>
                  <div className="text-lg font-medium text-gray-700">{leader.role}</div>
                  <div className="text-gray-600 leading-relaxed">{leader.bio}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadership;
