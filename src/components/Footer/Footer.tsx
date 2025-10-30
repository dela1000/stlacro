import Socials from 'src/components/Socials';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full pb-6 pt-6 lg:pt-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between space-y-6 lg:space-y-0">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-6 lg:space-y-0">
          <Socials />
        </div>
        <div className="text-xs lg:text-sm lg:mr-20 text-center lg:text-left space-y-1">
          <div>© {year} by dela1000.com</div>
          <div>All rights reserved</div>
          <div>Crafted by dela1000</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
