import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-5 lg:bottom-12 lg:right-12 z-100
        duration-750 transition-all cursor-pointer
        ${isVisible ? 'cursor-pointer opacity-50 hover:opacity-95' : 'opacity-0'}`}
    >
      <button onClick={scrollToTop} className="py-2 px-2 lg:py-4 lg:px-4 rounded-full bg-gray-500 shadow-lg hover:bg-gray-450 cursor-pointer">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
