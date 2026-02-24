const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span className="text-2xl ml-4 w-5 h-5 relative cursor-pointer">
    <span
      className={`absolute left-1 top-1/2 -translate-y-1/2 h-0.5 w-4 bg-blue-900 rounded transition-transform duration-300 origin-center
        ${isOpen ? 'rotate-135' : 'rotate-0'}`}
    />
    <span
      className={`absolute left-1 top-1/2 -translate-y-1/2 h-0.5 w-4 bg-blue-900 rounded transition-transform duration-300 origin-center
        ${isOpen ? '-rotate-135' : 'rotate-0'}`}
    />
  </span>
);

export default PlusMinusIcon;
