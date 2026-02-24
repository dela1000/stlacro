const About = () => {
  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">ABOUT</div>

      <div className="mt-8 flex flex-col gap-4 max-w-3xl mx-auto">
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="text-2xl font-bold pb-2">Who We Are</div>
          <div className="text-gray-700 leading-relaxed">
            St. Louis AcroYoga is for anyone interested in practicing AcroYoga. This is an all-levels group, so whether you're brand new or
            experienced, we'd love for you to join and play with us!
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-2xl font-bold pb-2">What is Acroyoga?</div>
          <div className="text-gray-700 leading-relaxed">
            Acroyoga is a practice that blends philosophies and movement from yoga, acrobatics, contact improvisation, dance, Thai bodywork, and
            mindfulness. It combines casual partner acrobatics with healing therapeutics, focusing on social connections and building trust between
            partners.
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="text-2xl font-bold pb-2">What We Offer</div>
          <div className="text-gray-700 leading-relaxed">
            We offer weekly classes for all skill levels, free community jams where you can practice and connect with other acroyogis, and periodic
            workshops led by experienced instructors. Check our home page for current schedules and upcoming events.
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="text-2xl font-bold pb-2">Community Guidelines</div>
          <div className="text-gray-700 leading-relaxed">
            We prioritize safety, consent, and inclusivity in all our activities. Before participating, please review our{' '}
            <a href="/conduct" className="text-blue-600 underline hover:text-blue-800">
              Community Guidelines
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
