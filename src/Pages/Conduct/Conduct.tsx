import { conductData, reportFormUrl, facebookUrl, reportIssueContent } from 'src/constants/conductData';

const Conduct = () => {
  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">COMMUNITY GUIDELINES</div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-200">
          <div className="text-2xl font-bold pb-2">Report an Issue</div>
          <div>
            {reportIssueContent.intro.split('THIS FORM').map((part, i) =>
              i === 0 ? (
                part
              ) : (
                <>
                  <a key={i} href={reportFormUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                    THIS FORM
                  </a>
                  {part}
                </>
              ),
            )}
          </div>
          <div className="mt-4">
            {reportIssueContent.contact.split('Facebook').map((part, i) =>
              i === 0 ? (
                part
              ) : (
                <>
                  <a key={i} href={facebookUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                    Facebook
                  </a>
                  {part}
                </>
              ),
            )}
          </div>
        </div>

        {conductData.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`border border-gray-200 rounded-lg p-6 ${section.bgColor === 'gray' ? 'bg-gray-200' : 'bg-white'}`}>
            <div className={`${section.title === 'CONSENT' ? 'text-3xl' : 'text-2xl'} font-bold pb-4`}>{section.title}</div>
            <div className="flex flex-col gap-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div className="text-xl font-semibold pb-1">{item.title}</div>
                  <div className="text-gray-700">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-200">
          <div className="text-2xl font-bold pb-4">REPORT</div>
          <div className="flex flex-col gap-2">
            <a href={reportFormUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              REPORT FORM
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              Message an admin via Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conduct;
