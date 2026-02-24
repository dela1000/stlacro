import { useState } from 'react';
import PlusMinusIcon from 'src/components/PlusMinusIcon';
import { faqData } from 'src/constants/faqData';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    const newOpen = new Set(openIndexes);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenIndexes(newOpen);
  };

  const openAll = () => {
    setOpenIndexes(new Set(faqData.map((_, i) => i)));
  };

  const collapseAll = () => {
    setOpenIndexes(new Set());
  };

  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">FREQUENTLY ASKED QUESTIONS</div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-end -mb-2">
          <button
            onClick={openIndexes.size === faqData.length ? collapseAll : openAll}
            className="text-gray-500 underline hover:text-gray-700 text-sm"
          >
            {openIndexes.size === faqData.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="font-semibold text-lg">{item.question}</span>
              <PlusMinusIcon isOpen={openIndexes.has(index)} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndexes.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-white text-gray-700 leading-relaxed">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-lg">
        Still have questions?{' '}
        <a href="https://www.facebook.com/groups/stlacroyogaclub/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Join our Facebook group
        </a>{' '}
        to ask the community!
      </div>
    </div>
  );
};

export default FAQ;
