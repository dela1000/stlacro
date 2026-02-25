const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="py-2 px-2 lg:py-4 lg:px-4 rounded-full bg-gray-300 shadow-lg hover:bg-gray-400 cursor-pointer border border-gray-400"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
