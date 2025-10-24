import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Socials from 'src/components/Socials';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

type MenuOption = {
  name: string;
};

const menuOptions: MenuOption[] = [{ name: 'home' }, { name: 'conduct' }];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1024 && isOpen === true) {
      setIsOpen(false);
    }
  }, [isOpen, width]);

  return (
    <div>
      <div className=" h-18 lg:h-28">
        <div className="flex justify-end items-center h-full px-5 lg:px-22 xl:px-24">
          {/* Hamburger icon for lg and smaller screens */}
          <div className="lg:hidden">
            <div className="w-10 h-10 flex items-center justify-center relative" onClick={() => setIsOpen(!isOpen)}>
              <div
                className={`absolute w-4 h-0.5 bg-blue-900 rounded transition-transform duration-500 origin-right ease-in-out
                  ${isOpen ? 'rounded-s-none -rotate-135 -translate-x-5 -translate-y-3' : '-translate-x-2 -translate-y-2'}`}
              />
              <div
                className={`absolute h-0.5 bg-blue-900 rounded transition-all duration-500 origin-center ease-in-out
                  ${isOpen ? 'w-8.5 -rotate-45' : 'w-8 opacity-100'}`}
              />

              <div
                className={`absolute w-4 h-0.5 bg-blue-900 rounded transition-transform duration-500 origin-left ease-in-out
                      ${isOpen ? 'rounded-e-none -rotate-135 translate-x-5 translate-y-3' : 'translate-x-2 translate-y-2'}`}
              />
            </div>
          </div>

          {/* Web Menu */}
          <div className="hidden lg:flex gap-5 lg:gap-12 xl:gap-20 items-center">
            {menuOptions.map((option, idx) => {
              return (
                <Link key={idx} to={`/${option.name}`} className="capitalize">
                  {option.name}
                </Link>
              );
            })}
          </div>
          <div className="lg:flex hidden ml-14 min-w-24 justify-center">
            <Socials />
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`lg:hidden duration-500 ease-in-out bg-blue-900 ${isOpen ? 'h-42' : 'h-0'}`}>
        {menuOptions.map((option, idx) => {
          return (
            <Link
              key={idx}
              to={`/${option.name}`}
              onClick={() => setIsOpen(false)}
              className={`p-4 uppercase block duration-500 ease-in-out ${isOpen ? 'opacity-100 delay-200 text-white' : 'opacity-0'}`}
            >
              {option.name}
            </Link>
          );
        })}
        <div
          className={`flex mr-5 flex-row justify-end gap-5 transition-opacity
            ${isOpen ? 'opacity-100 delay-400 duration-500' : 'opacity-0 duration-100'}`}
        >
          <Socials darkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
